/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState } from "react";
import { Button } from "./ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { loginUser } from "@/services/auth/login";

export default function LoginForm({ redirect }: { redirect?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const getErrorFieldMessage = (fieldName: string) => {
    if (state && state?.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);

      return error?.message;
    }
  };

  return (
    <form action={formAction} className="space-y-5">
      <FieldSet>
        {redirect && (
          <input type="hidden" name="redirect" value={redirect} />
        )}
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
            {getErrorFieldMessage("email") && (
              <FieldError>{getErrorFieldMessage("email")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
            />

            {getErrorFieldMessage("password") && (
              <FieldError>{getErrorFieldMessage("password")}</FieldError>
            )}
          </Field>

          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
            variant="outline"
          >
            Login
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
