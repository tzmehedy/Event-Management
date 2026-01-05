"use client";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { IUser } from "@/types/auth.interface";
import ProfileImageUploader from "./ProfileImageUploader";
import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { updateUserInfo } from "@/services/auth/auth.services";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { KeyRound, Loader } from "lucide-react";

export default function ProfileForm({ userInfo }: { userInfo: IUser }) {
  const userName = userInfo?.name.split("")[0].toUpperCase();
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    userInfo?.picture
  );

  const [state, formAction, isPending] = useActionState(updateUserInfo, null);

  const handelOnSubmit = (formData: FormData) => {
    if (image) {
      formData.append("image", image);
    }

    formAction(formData);
  };

  useEffect(() => {
    if (state?.success === true) {
      toast.success(state.message);
    }
    if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state])

  return (
    <>
      <form
        action={(formData) => handelOnSubmit(formData)}
        className="w-2/3 mt-5 space-y-10 my-5"
      >
        <div className=" border-2 border-[#DC143C] flex flex-col md:flex-row items-center  gap-5 p-10 rounded-t-lg shadow-md">
          <div className="relative w-32 h-32 border border-[#DC143C] rounded-full flex justify-center items-center">
            {previewUrl ? (
              <Image
                className="rounded-full p-1"
                src={previewUrl as string}
                alt="profile picture"
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="bg-gray-300 h-28 w-28 m-2 rounded-full  flex justify-center items-center">
                <h1 className="text-7xl text-muted-foreground">{userName}</h1>
              </div>
            )}
          </div>

          <div className="space-y-2 flex flex-col items-center justify-center">
            <h1 className="text-foreground font-bold text-2xl">
              Profile Picture{" "}
            </h1>
            <ProfileImageUploader
              setImage={setImage}
              setPreviewUrl={setPreviewUrl}
            />
          </div>
        </div>

        <div className="border-2 border-[#DC143C]  p-10 space-y-5 shadow-md ">
          <h1 className="text-foreground font-bold text-2xl">
            Personal Information
          </h1>
          <FieldSet>
            <FieldGroup>
              <div className="flex flex-col md:flex-row gap-5">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" name="name" defaultValue={userInfo?.name} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    defaultValue={userInfo?.email}
                    readOnly
                    className="text-muted-foreground"
                  />
                </Field>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <Field>
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    defaultValue={userInfo?.phone}
                    placeholder="01700000000"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="location">Location</FieldLabel>
                  <Input
                    id="location"
                    name="location"
                    defaultValue={userInfo?.location}
                  />
                </Field>
              </div>

              <div className="">
                <Field>
                  <FieldLabel htmlFor="about">Describe Your Self</FieldLabel>
                  <Textarea
                    className="h-32"
                    name="about"
                    id="about"
                    defaultValue={userInfo?.about}
                    placeholder="Bio"
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </div>

        <div className="border-2 border-[#DC143C]  p-10 space-y-5 shadow-md rounded-lg rounded-t-none">
          <FieldSet>
            <h1 className="text-2xl font-bold">Change Password</h1>
            <FieldGroup>
              <div className="flex flex-col md:flex-row gap-5">
                <Field>
                  <FieldLabel htmlFor="current-password">
                    Current Password
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <KeyRound className="absolute left-2 top-2" size={16} />
                    <Input
                      type="password"
                      id="current_password"
                      name="current_password"
                      placeholder="********"
                      className="pl-7"
                    />
                  </div>
                </Field>
                <Field>
                  <FieldLabel htmlFor="new_password">New Password</FieldLabel>
                  <div className="relative flex items-center">
                    <KeyRound className="absolute left-2 top-2" size={16} />
                    <Input
                      type="password"
                      id="new_password"
                      name="new_password"
                      placeholder="********"
                      className="pl-7"
                    />
                  </div>
                </Field>
              </div>

              <div className="flex justify-end ">
                <Button
                  disabled={isPending}
                  variant={"outline"}
                  className="bg-[#DC143C] text-white font-bold cursor-pointer"
                >
                  {isPending ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </div>
      </form>
    </>
  );
}
