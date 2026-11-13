import { ElementType, ReactNode } from "react";

interface ShowcaseCardProps {
  item: ElementType;
  title: string;
  description: string;
}


export default function ShowcaseCard({ item: Item, title, description }: ShowcaseCardProps) {
  return (

    <>
      <div className="showcaseCard bg-zinc-200 min-w-[12rem] max-w-[25rem] min-h-[8rem] rounded-lg px-6 py-6 flex flex-col justify-start items-start">

        {/* i'll show the main component here */}

        <div className="upperPart border-1 p-4 justify-center flex flex-col items-center h-[12rem] rounded-xl border-black">


          <Item />


        </div>

        <div className="mt-2 flex flex-col justify-start items-start ">
          <h3 className="text-3xl text-black font-semibold">{title}</h3>
          <h3 className="text-xl text-black/40 font-thin">{description}</h3>
        </div>
      </div>
    </>
  );
}
