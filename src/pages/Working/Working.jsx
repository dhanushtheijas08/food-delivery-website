import SectionHeading from "../../components/SectionHeading.jsx";
import WorkingContent from "./WorkingContent.jsx";
import img1 from "../../asserts/working-section/img-1.png";
import img2 from "../../asserts/working-section/img-2.png";
import img3 from "../../asserts/working-section/img-3.png";
import ContentWithImage from "./ContentWithImage";
import "./working.css";

const workingData = [
  {
    imgPath: img1,
    number: "01",
    title: "Tell us what you like (and what not)",
    content:
      "Never again waste time thinking about what to eat! Well Menu.Com AI will create a 100% personalized weekly meal plan just for you.",
    reverse: false,
  },
  {
    imgPath: img2,
    number: "02",
    title: "Approve your weekly meal plan",
    content:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    reverse: true,
  },
  {
    imgPath: img3,
    number: "03",
    title: "Receive meals at convenient time",
    content:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    reverse: false,
  },
];

function Working() {
  const renderContentWIthImage = workingData.map((item) => (
    <ContentWithImage
      imgPath={item.imgPath}
      number={item.number}
      title={item.title}
      content={item.content}
      reverse={item.reverse}
    />
  ));
  return (
    <section className="px-10 py-10">
      <SectionHeading
        sectionHeading="HOW IT WORKS"
        mainHeading="Your daily dose of health in 3 simple steps"
      />

      <div className="flex flex-col mt-10 space-y-10 md:space-y-0 ">
        {renderContentWIthImage}
      </div>
    </section>
  );
}

export default Working;
