import AboutHeroSection from "@/components/modules/About/AboutHeroSection";
import CoreValues from "@/components/modules/About/CoreValues";
import OurStory from "@/components/modules/About/OurStory";
export default function AboutPage() {
  return (
    <div className="space-y-20 mb-20">
        <div>
            <AboutHeroSection/>
        </div>

        <div className="container mx-auto p-2 md:p-0 my-20 ">
            <OurStory/>
            
        </div>
        <div>
            <CoreValues/>
        </div>
        
      
    </div>
  )
}
