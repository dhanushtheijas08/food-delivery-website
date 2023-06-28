import SectionHeading from "../../components/SectionHeading.jsx"
import MealsCard from "./MealsCard.jsx"
function MealsPage() {
  return (<div className="bg-orangeLight py-5 px-10">
    <SectionHeading 
      sectionHeading="MEALS" 
      mainHeading="Omnifood AI chooses from 5,000+ recipes"
      classname="text-center"
    />
    <MealsCard />
  </div>)
}
export default MealsPage;