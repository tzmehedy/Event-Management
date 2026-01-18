import Image from "next/image";
import OurStoryImg from "../../../../public/assets/images/Our_Story_Image.jpg"
export default function OurStory() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="space-y-3 text-justify">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p>
          Founded in 2023, EventPulse started with a simple observation: while
          social media connects us digitally, it often leaves us feeling more
          isolated in the real world. <br />
          We set out to change that by building a platform that makes it
          effortless to find local communities and host gatherings. From small
          book clubs to large-scale music festivals, we provide the tools to
          make it happen. <br />
          Today, we&apos;re proud to support thousands of organizers and
          millions of attendees worldwide, fostering connections that last a
          lifetime.
        </p>
      </div>

      <div className="relative w-full h-96 ">
        <div className="bg-[#DC143C]/40 absolute w-full h-96 rotate-0 md:rotate-3 rounded-lg">
            
        </div>
        <Image className="p-5 rounded-lg" src={OurStoryImg} alt="Our Story" fill style={{objectFit: "cover"}}/>
      </div>
    </div>
  );
}
