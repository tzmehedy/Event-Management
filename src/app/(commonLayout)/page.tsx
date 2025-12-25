import Counter from "@/components/modules/Home/Counter";
import FeatureEvents from "@/components/modules/Home/FeatureEvents";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import HowItWork from "@/components/modules/Home/HowItWork";
import PopularCategories from "@/components/modules/Home/PopularCategories";
import { Testimonial } from "@/components/modules/Home/Testimonial";
import TopHosts from "@/components/modules/Home/TopHosts";

export default  function HomePage() {
  
  return (
    <div className=" my-10 space-y-20 ">
      <div className="container mx-auto space-y-20 p-2 md:p-0">
        <HeroSection />
        <FeatureEvents />
        <HowItWork />
      </div>
      <div>
        <PopularCategories/>
      </div>
      <div className="container mx-auto space-y-20 p-2 md:p-0">
        <TopHosts/>
      </div>

      <div>
        <Counter/>
      </div>

      <div className="container mx-auto space-y-20 p-2 md:p-0">
        <Testimonial/>
      </div>
    </div>
  );
}
