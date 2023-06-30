import icon1 from "../../asserts/features-section/infinity.png";
import icon2 from "../../asserts/features-section/pause.png";
import icon3 from "../../asserts/features-section/zerowaste.png";
import FeatureCard from "./FeatureCard.jsx";
function FeaturesPage() {
  const featureCardData = [
    {
      iconPath: icon2,
      heading: "Never cook again!",
      content:
        "Our subscriptions cover 365 days per year, even including major holidays.",
      borderColor: "indigo",
    },
    {
      iconPath: icon1,
      heading: "No waste",
      content:
        "All our partners only use reusable containers to package all your meals.",
      borderColor: "sky",
    },
    {
      iconPath: icon3,
      heading: "Pause anytime",
      content:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
      borderColor: "green",
    },
  ];
  const featuresCardsRender = featureCardData.map((cardData) => (
    <FeatureCard
      iconPath={cardData.iconPath}
      heading={cardData.heading}
      content={cardData.content}
      borderColor={cardData.borderColor}
    />
  ));
  return (
    <div className="px-10 py-10 flex justify-between">
      {featuresCardsRender}
    </div>
  );
}

export default FeaturesPage;
