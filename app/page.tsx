import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Divider from "./components/divider";



export default function Home() {
  return (
    <>

      {/* alright let us start */}

      <Navbar />
      <Hero />
      <div className="divider mt-60">

        <Divider />
      </div>


    </>
  );
}
