"use server";

import z from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  getDefaultDashboardRoutes,
  isValidRedirectForRole,
  UserRole,
} from "@/lib/auth-utils";
import { redirect } from "next/navigation";
import { setCookie } from "@/lib/tokenHandler";
import { serverFetch } from "@/lib/server-fetch";

const loginFormZodSchema = z.object({
  email: z.email({ error: "Invalid Email Address" }),
  password: z.string().min(8, { error: "Password must be 8 character long" }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginUser = async (_currentState: any, formData: any): Promise<any> => {
  try {
    const redirectTo = formData.get("redirect");
    const loginPayload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validatesFields = loginFormZodSchema.safeParse(loginPayload);

    if (!validatesFields.success) {
      return {
        success: false,
        errors: validatesFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const res = await serverFetch.post("/auth/login", {
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginPayload)
    }).then((res)=> res.json())

    await setCookie("accessToken", res.data?.userTokens?.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    await setCookie("refreshToken", res.data?.userTokens?.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    const verifiedToken: JwtPayload | string = jwt.verify(
      res.data?.userTokens?.accessToken,
      process.env.JWT_ACCESS_SECRET_KEY as string
    );

    if (typeof verifiedToken === "string") {
      throw new Error("Invalid Token");
    }

    const role: UserRole = verifiedToken.role;

    if (redirectTo) {
      const requestPath = redirectTo.toString();

      if (isValidRedirectForRole(requestPath, role)) {
        redirect(requestPath);
      } else {
        redirect(getDefaultDashboardRoutes(role));
      }
    } else {
      redirect("/");
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    return { error: "Login Failed" };
  }
};
