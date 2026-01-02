"use server";

import { serverFetch } from "@/lib/server-fetch";
import z from "zod";

const registerFormZodSchema = z.object({
  name: z.string({error:"Name should be string"}).min(1, {error: "Required"}),
  email: z.email({error: "Invalid Email"}),
  interests: z.string().min(1, {error: "Required"}),
  location: z.string().min(1, {error: "Required"}),
  password: z
    .string()
    .min(8, {message: "Password must be 8 character long"})
    .regex(/^(?=.*[A-Z])/, {
      message: "The password must have one upper case letter",
    })
    .regex(/^(?=.*\d)/, { message: "The password must have one number" })
    .regex(/^(?=.*[!@#$%^&*,.?":{}|<>_\-+=~`[\]\\;/'])/, {
      message: "The password must have a special character",
    }),
  confirmPassword:z.string()
}).refine((data)=> data.password === data.confirmPassword, {
  message: "Password Does not match",
  path: ["confirmPassword"]
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = async (_currentState: any, formData: any):Promise<any> => {
  try {
    const validatesFields = registerFormZodSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      interests: formData.get("interests"),
      location: formData.get("location"),
      password: formData.get("password"),
      confirmPassword:formData.get("confirmPassword")
    })

    if(!validatesFields.success){
      return {
        success: false,
        errors: validatesFields.error.issues.map((issue)=>{
          return {
            field: issue.path[0],
            message: issue.message
          }
        })

      }
    }

    const interests = await formData.get("interests").split(",");
    const registerUserPayload = {
      name: formData.get("name"),
      email: formData.get("email"),
      interests,
      location: formData.get("location"),
      password: formData.get("password"),
    };

    const res = await serverFetch.post("/user/create-user", {
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(registerUserPayload),
    }).then((res) => res.json());

    return res;
  } catch (error) {
    console.log(error)
    return {error: "Registration Failed"}
  }
};
