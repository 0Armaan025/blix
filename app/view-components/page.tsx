import ShowcaseCard from "../components/showcase_card";
import DangerousButton from "../components/button/dangerous_button";
import OutlineButton from "../components/button/outline_button";
export default function ViewComponents() {
  return (
    <>

      <div className="ViewComponentsPage flex flex-col justify-start items-start">

        <h2 className="text-[4rem] font-semibold font-mono ">View all the components</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ShowcaseCard item={DangerousButton} title="Dangerous Button" description="Dangerous Button" />


          <ShowcaseCard item={OutlineButton} title="Outline Button" description="Outline Button" />


        </div>

      </div>
    </>
  );
}
