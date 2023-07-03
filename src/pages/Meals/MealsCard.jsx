import HighLightText from "../../components/HighLightText.jsx"
import SubHeading from "../../components/SubHeading.jsx"
import IconWithText from "../../components/IconWithText.jsx"
import foodImg1 from "../../asserts/meals-section/food-1.jpg"
import starImg from "../../asserts/meals-section/star.png"
import calories from "../../asserts/meals-section/calories.png"
import nutrient from "../../asserts/meals-section/nutrient.png"
import foodImg2 from "../../asserts/meals-section/food-2.jpg";


function MealsCard({foodName, foodImgPath}) {
  return <div className="shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer rounded-xl bg-[hsl(0 0% 90%)]">
    <div className className="w-full">
    <img src={foodImgPath} alt="food" className="h-52 w-full rounded-t-xl" />
    </div>
    <div className="space-y-3 px-5 pt-5 pb-6">

    <div className="mx-auto w-fit flex text-center gap-2">
    <HighLightText classname="text-white bg-[#ff5722]">Vitamin Rich</HighLightText>
    <HighLightText classname="text-white bg-[#4caf50]">Natural Booster</HighLightText>
    </div>

    <SubHeading classname="text-center lg:text-[1.8rem]">{foodName}</ SubHeading>


    <div className="flex flex-col gap-2">
    <IconWithText 
      iconPath={calories}
      boldText="650"
      text="calories"
      boldTextPosition="front"
    />
    <IconWithText 
      iconPath={nutrient}
      boldText="80"
      text="Nutrients ®"
      boldTextPosition="back"
    />
    <IconWithText 
      iconPath={starImg}
      boldText="4.9"
      text="rating (537)"
      boldTextPosition="front"
    />
    </div>
    </div>
  </div>
}

export default MealsCard;
