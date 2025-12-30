/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState } from "react";
import { Button } from "./ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { registerUser } from "@/services/auth/register";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { Loader } from "lucide-react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  const getErrorFieldMessage = (fieldName: string) => {
    if (state && state?.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error?.message;
    }
  }

  if(!isPending && state?.success){
    toast.success("Registration Successfully. Please login")
    redirect("/login")
  }


  return (
    <form action={formAction} className="space-y-5">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input className=" border-2 focus-visible:border-[#DC143C]" id="name" name="name" type="text"  placeholder="Jhon Deo" />
            {getErrorFieldMessage("name") && (
              <FieldError>{getErrorFieldMessage("name")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input className="border-2 focus-visible:border-[#DC143C]" id="email" name="email" type="email"  placeholder="example@gmail.com" />
            {getErrorFieldMessage("email") && (
              <FieldError>{getErrorFieldMessage("email")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="interests">Interests</FieldLabel>
            <Input className=" border-2 focus-visible:border-[#DC143C]" id="interests" name="interests" type="text"   placeholder="sports,music" />
            {getErrorFieldMessage("interests") && (
              <FieldError>{getErrorFieldMessage("interests")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="Dhaka,Bangladesh"
              className="border-2 focus-visible:border-[#DC143C]"
            />
            {getErrorFieldMessage("location") && (
              <FieldError>{getErrorFieldMessage("location")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input className="border-2 focus-visible:border-[#DC143C]" id="password" name="password" type="password"   placeholder="********" />
            {getErrorFieldMessage("password") && (
              <FieldError>{getErrorFieldMessage("password")}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input className="border-2 focus-visible:border-[#DC143C]" id="confirmPassword" name="confirmPassword" type="password"   placeholder="********" />
            {getErrorFieldMessage("confirmPassword") && (
              <FieldError>{getErrorFieldMessage("confirmPassword")}</FieldError>
            )}
          </Field>

          <Field>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2"
              variant="outline"
            >
              {
                isPending? <Loader className="animate-spin"/>: "Register"
              }
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
