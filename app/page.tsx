import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
      </div>
      <Faq />
    </div>
  );
}
