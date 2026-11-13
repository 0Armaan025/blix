import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Divider from "./components/divider";
import Features from "./components/features";
import Footer from "./components/footer";
import DangerousButton from "./components/button/dangerous_button";
import OutlineButton from "./components/button/outline_button";
import ShowcaseCard from "./components/showcase_card";



export default function Home() {
  return (
    <>

      {/* alright let us start */}

      <Hero />
      <div className="divider mt-60">

        <Divider />

      </div>
      <Features />


    </>
  );
}
