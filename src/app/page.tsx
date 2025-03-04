import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebnar from "@/components/UpcomingWebnar";
import Instratur from "@/components/Instratur";
import Footer from "@/components/Footer";



export default function Home() {
  return (
   <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonial/>
      <UpcomingWebnar/>
      <Instratur/>
      <Footer/>
   </main>
  );
}
