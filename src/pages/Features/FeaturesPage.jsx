import icon1 from "../../asserts/features-section/infinity.png";
import icon2 from "../../asserts/features-section/pause.png";
import icon3 from "../../asserts/features-section/zerowaste.png";
import FeatureCard from "./FeatureCard.jsx";
function FeaturesPage() {
  const featureCardData = [
    {
      id: "1",
      iconPath: icon2,
      heading: "Never cook again!",
      content:
        "Our subscriptions cover 365 days per year, even including major holidays.",
      borderColor: "indigo",
    },
    {
      id: "2",
      iconPath: icon1,
      heading: "No waste",
      content:
        "All our partners only use reusable containers to package all your meals.",
      borderColor: "sky",
    },
    {
      id: "3",
      iconPath: icon3,
      heading: "Pause anytime",
      content:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
      borderColor: "green",
    },
  ];
  // const featuresCardsRender = featureCardData.map((cardData) => (
  //   <FeatureCard
  //     key={cardData.id}
  //     iconPath={cardData.iconPath}
  //     heading={cardData.heading}
  //     content={cardData.content}
  //     borderColor={cardData.borderColor}
  //   />
  // ));
  return (
    <div className="px-10 py-10 flex flex-col items-center gap-8 xl:gap-0 md:flex-row justify-between">
      <FeatureCard
        key={featureCardData.at(0).id}
        iconPath={featureCardData.at(0).iconPath}
        heading={featureCardData.at(0).heading}
        content={featureCardData.at(0).content}
        borderColor={featureCardData.at(0).borderColor}
      />
      <FeatureCard
        key={featureCardData.at(1).id}
        iconPath={featureCardData.at(1).iconPath}
        heading={featureCardData.at(1).heading}
        content={featureCardData.at(1).content}
        borderColor={featureCardData.at(1).borderColor}
      />
      <FeatureCard
        key={featureCardData.at(2).id}
        iconPath={featureCardData.at(2).iconPath}
        heading={featureCardData.at(2).heading}
        content={featureCardData.at(2).content}
        borderColor={featureCardData.at(2).borderColor}
      />
      {/* {featuresCardsRender} */}
    </div>
  );
}

export default FeaturesPage;
