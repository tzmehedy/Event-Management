import AboutHeroSection from "@/components/modules/About/AboutHeroSection";
import OurStory from "@/components/modules/About/OurStory";
export default function AboutPage() {
  return (
    <div className="">
        <div>
            <AboutHeroSection/>
        </div>

        <div className="container mx-auto p-2 md:p-0 my-20">
            <OurStory/>

        </div>
        
      
    </div>
  )
}
