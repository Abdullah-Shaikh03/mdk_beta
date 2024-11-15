import HeroTable from "@/components/Hero/HeroTable";
import HeroImg from "@/components/Hero/HeroImg";
import Testimonials from "@/components/Hero/Testimonials";
import Scroller from "@/components/InfiniteScroller/Scroller";
import Values from "@/components/About Us/Values";
import Services from "@/components/Services/Services";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="wrapper ">
          <HeroTable className="mb-16" />
          <HeroImg className="mt-4 flex justify-center" />
        </div>
        <Services id="service"/>

        <Values />

        {/* <WhyUs/> */}
        <Testimonials />

        {/* <Carousal/> */}
        <div className="flex align-middle justify-center w-[100%] ">
          <Scroller />
        </div>
      </div>
    </>
  );
}
