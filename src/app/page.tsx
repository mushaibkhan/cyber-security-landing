import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import DlpServices from "@/components/sections/DlpServices";
import Features from "@/components/sections/Features";
import DlpCapabilities from "@/components/sections/DlpCapabilities";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Trust from "@/components/sections/Trust";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DlpServices />
        <DlpCapabilities />
        <Trust />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}




