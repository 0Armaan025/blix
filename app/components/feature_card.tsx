import { LucideIcon } from "lucide-react";

interface FeatureCardProp {
  icon: LucideIcon;
  title: string;
  description: string;
};


export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProp) {
  return (
    <>
      <div className="featureCard rounded-xl min-w-1/2 min-h-[20rem] bg-[#0a0a0a] px-4 py-4 flex flex-col justify-start items-start  hover:bg-[#0b1b1b] transition-all cursor-pointer hover:scale-102">

        <Icon size={48} className=" bg-[#1b1b7b] p-2 rounded-2xl" />

        <h4 className="text-3xl text-white font-geist-sans mt-4">{title}</h4>

        <h5 className="max-w-[18rem] text-white/70 mt-4 ">{description}</h5>

      </div>
    </>
  );

}
