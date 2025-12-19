import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="min-h-dvh">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
