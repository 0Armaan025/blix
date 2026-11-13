import { LucideCopy } from "lucide-react";
import FeatureCard from "./feature_card";

export default function Features() {
  return (
    <>

      <h3 className="text-[3rem] ml-10 mt-6 font-semibold underline underline-offset-8 decoration-blue-700">Features of this library</h3>

      {/* here I will show the feature cards */}


      <div className="featureCards flex flex-row justify-center gap-x-8 items-center mx-12 my-2 p-4">

        <FeatureCard title="Just Copy" icon={LucideCopy} description={"Just copy paste the code directly"} />
        <FeatureCard title="feature: if you are here, star the github repo" icon={LucideCopy} description={"hehehehe, that's just a test feature, coz you gotta star my repo"} />

      </div>
    </>
  );
}
