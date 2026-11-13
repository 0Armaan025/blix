export default function Hero() {

  return (
    <div className="heroPage flex flex-col justify-center items-center p-6 mt-30">
      <h3 className="font-bold text-[6rem] text-center leading-20 tracking-tighter shadow-sm min-w-[2rem] max-w-[50rem] text-shadow-black p-2">

        <span className="text-amber-400">        BLIX: </span>
        <span className="text-[5rem]">
          Your nearby component library
        </span>
      </h3>
      <h5 className="text-center max-w-[30rem] mt-4">Have fun shopping free components ready to be pasted directly (they are cool looking as well)</h5>


      {/* now butttons here  */}

      <div className="buttons gap-x-4 p-4 flex flex-row justify-center items-center mt-4">
        <button className="bg-zinc-400 text-black font-light px-6 py-3 rounded-md transition-all border-[1px] border-zinc-300 cursor-pointer hover:pointer-cursor hover:bg-zinc-800 hover:text-white text-xl">CONTINUE</button>

        <button className="bg-transparent text-white border-[1px] border-white font-light px-9 py-3 rounded-md text-xl hover:bg-white transition-all hover:text-black cursor-pointer">DOCS</button>
      </div>

    </div>
  );

}
