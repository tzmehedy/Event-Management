import Image from "next/image";
import heroBgImage from "../../../../public/assets/images/About_Hero_BG.jpg";

export default function AboutHeroSection() {
  return (
    <div className="shadow-sm">
      <div className="relative w-full h-90">
        <Image
          src={heroBgImage}
          alt="about hero"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="relative container mx-auto py-10 px-5 lg:px-0 space-y-2">
          <h1 className=" text-muted-foreground text-3xl md:text-5xl lg:text-7xl font-bold">Bringing people together,</h1>
          <h1 className=" text-[#DC143C] text-3xl md:text-5xl lg:text-7xl font-bold">One event at a time.</h1>
          <p className="text-muted-foreground/80">EventPulse is on a mission to democratize event creation and discovery. We&apos;re building <br /> the infrastructure for real-world connection in a digital age.</p>
        </div>
      </div>
    </div>
  );
}
