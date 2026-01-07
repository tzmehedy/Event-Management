"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function ExploreEventSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        params.set("searchTerm", searchTerm);
        // params.set("page", "1");
      } else {
        params.delete("searchTerm");
        // params.set("page", "1")
      }

      if(location){
        params.set("location", location)
      }else{
        params.delete("location")
      }

      startTransition(() => {
        router.push(`?${params.toString()}`, { scroll: false });
      });
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, router, searchParams]);

  const handelReset = () => {
    setSearchTerm("");
    setCategory("");
    setLocation("");

    router.replace("?", { scroll: false });
  };
  return (
    <div className="border p-8 shadow-md rounded-lg flex flex-col md:flex-row justify-center items-center gap-3">
      <div className="relative min-w-1/2">
        <Search className="absolute top-3 left-2" size={16} />
        <Input
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="searchTerm"
          className="pl-7"
          placeholder="Search by title"
        />
      </div>

      <div className="flex-1 flex md:justify-between gap-3">
        <div className="w-full md:w-1/2">
          <Select
            name="category"
            value={category}
            onValueChange={(value) => {
              if (value) {
                params.set("category", value);
                // params.set("page", "1")
                router.push(`?${params.toString()}`, { scroll: false });
                setCategory(value);
              } else {
                params.delete("category");
              }
            }}
          >
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
        </div>

        <div className="relative w-full md:w-1/2">
        <Search className="absolute top-3 left-2" size={16} />
        <Input
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          className="pl-7"
          placeholder="Search by location"
        />
          
        </div>

        <div>
          <Button
            onClick={handelReset}
            variant="outline"
            className="cursor-pointer bg-[#DC143C] text-white"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
