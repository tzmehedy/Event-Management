"use client";

import { Button } from "./ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";

export default function LoginForm() {
  return (
    <form className="space-y-5">
      <FieldSet>        
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" placeholder="example@gmail.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" placeholder="********"/>
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button className="w-full bg-[#DC143C] text-white font-bold cursor-pointer outline-2" variant="outline">Login</Button>
    </form>
  );
}
