"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface IPaginationProps {
  totalPage: number;
}

export default function Pagination({ totalPage }: IPaginationProps) {
  const paginatedArray = [...Array(totalPage).keys()];

  const router = useRouter();
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (activePage) {
        params.set("page", activePage.toString());
        router.push(`?${params.toString()}`);
      }

      startTransition(() => {
        router.push(`?${params.toString()}`, { scroll: false });
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [activePage, setActivePage, router, searchParams]);

  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        <Button
          disabled={activePage <= 1}
          onClick={() => setActivePage(activePage - 1)}
          className="cursor-pointer"
          variant={"outline"}
        >
          Previous
        </Button>
      </div>
      {paginatedArray &&
        paginatedArray?.map((page, i) => (
          <Button
            onClick={() => setActivePage(i + 1)}
            variant={"outline"}
            className={cn("cursor-pointer", {
              "bg-[#DC143C] text-white": page + 1 === activePage,
            })}
            key={i}
          >
            {page + 1}
          </Button>
        ))}

      <div>
        <Button
          disabled={activePage >= totalPage}
          onClick={() => setActivePage(activePage + 1)}
          className="cursor-pointer"
          variant={"outline"}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
