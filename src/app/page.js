import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[#0F103F] text-white">
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}