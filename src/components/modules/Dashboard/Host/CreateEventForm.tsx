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
import { createEvent } from "@/services/host/hostManagement";
import { format } from "date-fns";
import {
  Calendar1Icon,
  Clock4,
  DollarSign,
  Loader,
  MapPin,
  Plus,
  Type,
  Users,
} from "lucide-react";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function CreateEventForm() {
  const [date, setDate] = useState<Date>();
  const [image, setImage] = useState<File | null>(null);

  const [state, formAction, isPending] = useActionState(createEvent, null);

  const onSubmit = (formData: FormData) => {
    if (date) {
      formData.append("event_date", date.toISOString());
    }
    if (image) {
      formData.append("image", image);
    }

    formAction(formData);
  };

  useEffect(() => {
    if (state?.success===true) {
      toast.success("Your event has been published");
      redirect("/host/dashboard/published-events");
    }
    if(state?.success===false){
      toast.error(state?.message)
    }
  }, [state]);

  return (
    <form action={(formData) => onSubmit(formData)}>
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
                <Select name="category">
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
                  />
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
                <div className="">
                  <SingleImageUploader setImage={setImage} />
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
            <p className="flex items-center gap-2">
              <Plus /> Create Event
            </p>
          )}
        </Button>
      </div>
    </form>
  );
}
