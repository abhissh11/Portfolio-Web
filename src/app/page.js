import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <ScrollTopBtn />
    </div>
  );
}
