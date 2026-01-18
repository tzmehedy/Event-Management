import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="sticky top-0 bg-background z-40 ">
        <Navbar />
      </div>
      <div className="min-h-dvh">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
