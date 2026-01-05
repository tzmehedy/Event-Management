"use client";
import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateEvent } from "@/services/host/hostManagement";
import { IEvent } from "@/types/host.interface";
import { format } from "date-fns";
import {
  Calendar1Icon,
  Clock4,
  DollarSign,
  Loader,
  MapPin,
  Type,
  Users,
} from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function UpdateEventForm({ event }: { event: IEvent }) {
  const [date, setDate] = useState<Date>(new Date(event?.date));
  const [image, setImage] = useState<File | null>(null);

  const [state, formAction, isPending] = useActionState(updateEvent, null);

  const manageImage = (formData: FormData) => {
    if (image) {
      formData.append("image", image);
    }
    formAction(formData);
  };

  useEffect(() => {
    if (state && state?.success === true) {
      toast.success("Your event successfully updated");
      redirect("/host/dashboard/published-events");
    }
    if (state && state?.success === false) {
      toast.error(state?.message);
    }
  }, [state])

  return (
    <form action={(formData) => manageImage(formData)}>
      <input value={event?._id} type="hidden" name="_id" />
      <input type="hidden" name="event_date" value={date.toISOString()} />
      <FieldSet>
        <FieldGroup className="space-y-10">
          <div className="border-2 border-muted px-5 py-10 space-y-3 inset-shadow-2xs rounded-lg">
            <FieldTitle className="text-3xl font-bold">
              Basic Information
            </FieldTitle>
            <Field>
              <FieldLabel
                htmlFor="title"
                className="text-bold text-md text-muted-foreground"
              >
                Event Title
              </FieldLabel>
              <div className="relative">
                <Type
                  className="absolute left-3 top-2 text-muted-foreground"
                  size={18}
                />
                <Input
                  className="pl-9 focus-visible:border-[#DC143C]"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="E.g. Annual Tech Conference 2026"
                  defaultValue={event?.title}
                />
              </div>
            </Field>

            <div className="flex flex-col md:flex-row gap-3">
              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Category
                </FieldLabel>
                <Select name="category" defaultValue={event?.category}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup className="w-full">
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="foodAndDrink">Food & Drink</SelectItem>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="wellness">Wellness</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Organizer Name
                </FieldLabel>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    className="pl-9 focus-visible:border-[#DC143C]"
                    id="organizer_name"
                    name="organizer_name"
                    type="text"
                    placeholder="E.g. Event Pulse Team"
                    defaultValue={event?.organizer_name}
                  />
                </div>
              </Field>
            </div>
          </div>

          <div className="border-2 border-muted px-5 py-10 space-y-3 inset-shadow-2xs rounded-lg">
            <FieldTitle className="text-3xl font-bold">
              Date & Location
            </FieldTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Event Date
                </FieldLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      data-empty={!date}
                      className="data-[empty=true]:text-muted-foreground w-1/2  justify-start text-left font-normal"
                    >
                      <Calendar1Icon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      required
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Location
                </FieldLabel>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    className="pl-9 focus-visible:border-[#DC143C]"
                    id="location"
                    name="location"
                    type="text"
                    placeholder="E.g. Dhaka,Bangladesh"
                    defaultValue={event?.location}
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Time
                </FieldLabel>
                <div className="relative">
                  <Clock4
                    className="absolute left-3 top-2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    className="pl-9 focus-visible:border-[#DC143C]"
                    id="time"
                    name="time"
                    type="text"
                    placeholder="E.g. 10 A.M"
                    defaultValue={event?.time}
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Event Status
                </FieldLabel>
                <div className="">
                  <Select name="status" defaultValue={event?.event_status}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectGroup className="w-full">
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="OPEN">Open</SelectItem>
                        <SelectItem value="FULL">Full</SelectItem>
                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                        <SelectItem value="COMPLETED">Completed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
            </div>
          </div>

          <div className="border-2 border-muted px-5 py-10 space-y-3 inset-shadow-2xs rounded-lg">
            <FieldTitle className="text-3xl font-bold">
              Tickets & Capacity
            </FieldTitle>

            <div className="flex flex-col md:flex-row gap-3">
              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Total Capacity
                </FieldLabel>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    className="pl-9 focus-visible:border-[#DC143C]"
                    id="total_capacity"
                    name="total_capacity"
                    type="number"
                    placeholder="E.g. 500"
                    defaultValue={event?.total_participants}
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="title"
                  className="text-bold text-md text-muted-foreground"
                >
                  Ticket Price
                </FieldLabel>
                <div className="relative">
                  <DollarSign
                    className="absolute left-3 top-2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    className="pl-9 focus-visible:border-[#DC143C]"
                    id="price"
                    name="price"
                    type="text"
                    placeholder="E.g. 100"
                    defaultValue={event?.joining_fee}
                  />
                </div>
              </Field>
            </div>
          </div>

          <div className="border-2 border-muted px-5 py-10 space-y-3 inset-shadow-2xs rounded-lg">
            <FieldTitle className="text-3xl font-bold">
              Media & Description
            </FieldTitle>

            <div className="space-y-5">
              <Field>
                <FieldLabel className="text-md text-muted-foreground">
                  Event Banner
                </FieldLabel>
                <div className="flex flex-col md:flex-row justify-between gap-10 ">
                  <div className="relative  flex-1 border border-[#DC143C] rounded-lg">
                    <Image
                      className=" p-5"
                      src={event?.image}
                      alt={event?.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <SingleImageUploader setImage={setImage} />
                  </div>
                </div>
              </Field>

              <Field>
                <FieldLabel className="text-md text-muted-foreground">
                  Description
                </FieldLabel>
                <div className="">
                  <Textarea
                    className="focus-visible:border-[#DC143C] h-40"
                    name="description"
                    id="description"
                    placeholder="Describe about your event"
                    defaultValue={event?.description}
                  />
                </div>
              </Field>
            </div>
          </div>
        </FieldGroup>
      </FieldSet>

      <div className="flex justify-end">
        <Button
          disabled={isPending}
          className="mt-5 cursor-pointer bg-[#DC143C] text-white"
          variant={"outline"}
          type="submit"
        >
          {isPending ? (
            <Loader className="text-white animate-spin" />
          ) : (
            <p className="flex items-center gap-2">Update Event Info</p>
          )}
        </Button>
      </div>
    </form>
  );
}
