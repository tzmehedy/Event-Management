"use client";

import { useActionState, useEffect } from "react";
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
import { Loader } from "lucide-react";
import { toast } from "sonner";

export default function LoginForm({ redirect }: { redirect?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const getErrorFieldMessage = (fieldName: string) => {
    if (state && state?.errors) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error?.message;
    }
  }

  useEffect(()=>{
    if(state && state?.success === false){
      toast.error(state?.message)
  }
  }, [state])

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
              className="border-2 focus-visible:border-[#DC143C]"
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
              className=" border-2 focus-visible:border-[#DC143C]"
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
            {
                isPending? <Loader className="animate-spin"/>: "Login"
              }
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
