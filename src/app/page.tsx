import Tournament from "@/components/Tournament/Tournament";
import Contactsection from "@/components/Contact/Contactsection";
import Footer from "@/components/Footer/Footer";
import Faq from "@/components/FAQ/Faq";
import Gallery from "@/components/Gallery/Gallery";
import Teams from "@/components/Teams/Teams";
import Hero from "@/components/HeroSection/Hero";
import AboutUs from "@/components/aboutus/page";
import MedalTable from "@/components/MedalTable/MedalTable";
import ScoreCard from "@/components/ScoreCard/ScoreCard";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex bg-[#0B0A09] flex-col items-center justify-center">
        <AboutUs />
        <Tournament />
        <MedalTable/>
        <ScoreCard/>
        <Faq></Faq>
        <Gallery />
        <Teams />
        <Contactsection />
        <Footer />
        {/* <h1 className="text-4xl font-bold">Vriddhi By TeamWB</h1> */}
      </div>
    </>
  );
}
