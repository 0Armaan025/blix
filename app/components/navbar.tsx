import Link from "next/link";
import React from "react";


const NAVBAR_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Me",
    url: "/",
  }
];

export default function Navbar() {

  return (
    <>
      <nav className="sticky top-0 bg-black   w-full px-6 py-4 flex flex-row justify-between items-center">
        <div className="title">
          <h3 className="text-3xl text-white font-semibold font-mono">Blix</h3>
        </div>
        <div className="middle flex flex-row text-center items-center justify-center gap-x-4">
          {NAVBAR_LINKS.map((item, index) => (
            <Link href={item.url} key={item.name} className="">              <h3 className="text-lg font-thin text-white text-white/80 hover:cursor-pointer hover:text-white" >
              {item.name}
            </h3>
            </Link>



          ))}
        </div>

        <div className="endSection">

          <button className="bg-white px-6 py-2 justify-center items-center border-[0.1px] border-black rounded-lg transition-all hover:cursor-pointer text-black hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white  ">
            Github
          </button>
        </div>
      </nav>
    </>
  );

}
