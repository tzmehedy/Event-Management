"use client"

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="border p-8 shadow-lg rounded-lg flex flex-col md:flex-row gap-3">
      <div className="relative min-w-1/2">
        <Search className="absolute top-3 left-2" size={16}/>
        <Input className="pl-7" placeholder="Search" />
      </div> 

      <Select name="status">
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

      <Select name="sortBy">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="w-full">
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="dsc">Descending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
