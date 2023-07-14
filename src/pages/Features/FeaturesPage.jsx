import icon1 from "../../asserts/features-section/infinity.png";
import icon2 from "../../asserts/features-section/pause.png";
import icon3 from "../../asserts/features-section/zerowaste.png";
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
  // const featuresCardsRender = featureCardData.at(0).map((cardData) => (
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
      <div
        className={`w-fit space-y-1.5 border-4  border-indigo-300 py-5 px-2 lg:py-12 lg:px-5 rounded-2xl `}
      >
        <div
          className={`bg-indigo-100 mb-5 rounded-full w-fit px-3.5 py-3.5 mx-auto`}
        >
          <img
            src={featureCardData.at(0).iconPath}
            alt="icon"
            className="h-12"
          />
        </div>
        <label className="block text-center text-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl text-textDark ">
          {featureCardData.at(0).heading}
        </label>
        <p className="text-center text-textLigth text-sm lg:text-base max-w-xs">
          {featureCardData.at(0).content}
        </p>
      </div>
      <div
        className={`w-fit space-y-1.5 border-4  border-sky-300 py-5 px-2 lg:py-12 lg:px-5 rounded-2xl `}
      >
        <div
          className={`bg-sky-100 mb-5 rounded-full w-fit px-3.5 py-3.5 mx-auto`}
        >
          <img
            src={featureCardData.at(1).iconPath}
            alt="icon"
            className="h-12"
          />
        </div>
        <label className="block text-center text-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl text-textDark ">
          {featureCardData.at(1).heading}
        </label>
        <p className="text-center text-textLigth text-sm lg:text-base max-w-xs">
          {featureCardData.at(1).content}
        </p>
      </div>
      <div
        className={`w-fit space-y-1.5 border-4  border-green-300 py-5 px-2 lg:py-12 lg:px-5 rounded-2xl `}
      >
        <div
          className={`bg-green-100 mb-5 rounded-full w-fit px-3.5 py-3.5 mx-auto`}
        >
          <img
            src={featureCardData.at(2).iconPath}
            alt="icon"
            className="h-12"
          />
        </div>
        <label className="block text-center text-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl text-textDark ">
          {featureCardData.at(2).heading}
        </label>
        <p className="text-center text-textLigth text-sm lg:text-base max-w-xs">
          {featureCardData.at(2).content}
        </p>
      </div>
      {/* {featuresCardsRender} */}
    </div>
  );
}

export default FeaturesPage;
