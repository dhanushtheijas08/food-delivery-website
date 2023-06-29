import SectionHeading from "../../components/SectionHeading.jsx";
import PriceCard from "./PriceCard.jsx";
function PricePage() {
  return (
    <div className="px-10 py-10">
      <SectionHeading
        sectionHeading="PRICING"
        mainHeading="Eating well without beaking the bank"
        classname=""
      />
      <div className="flex w-full lg:justify-evenly flex-col md:flex-row md:justify-between items-center">
        <PriceCard />

        <PriceCard isPrimary />
      </div>

      <p className="text-lg text-textLigth text-center mt-20">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
    </div>
  );
}
export default PricePage;
