import SectionHeading from "../../components/SectionHeading.jsx"
import IconWithText from "../../components/IconWithText.jsx"
import MealsCard from "./MealsCard.jsx"
import foodImg1 from "../../asserts/meals-section/food-1.jpg";
import foodImg2 from "../../asserts/meals-section/food-2.jpg";
import SubHeading from "../../components/SubHeading.jsx";
import checkIcon from "../../asserts/meals-section/check.png";

const mealsCardData = [
  {
    foodName : "Mean Chicken Wrap",
    foodImgPath : foodImg1,
  },
  {
    foodName : "Energizing Smoothie",
    foodImgPath : foodImg2,
  },

]
const dietList = [
  {iconPath : checkIcon ,name : "Vegetarian"},
  {iconPath : checkIcon ,name : "Vegan"},
  {iconPath : checkIcon ,name : "Pescatarian"},
  {iconPath : checkIcon ,name : "Gluten-free"},
  {iconPath : checkIcon ,name : "Lactose-free"},
  {iconPath : checkIcon ,name : "Keto"},
  {iconPath : checkIcon ,name : "Paleo"},
  {iconPath : checkIcon ,name : "Low FODMAP"},
  {iconPath : checkIcon ,name : "Kid-friendly"},
]
function MealsPage() {
  const mealsCardRender = mealsCardData.map(menu => ( <MealsCard foodName={menu.foodName} foodImgPath={menu.foodImgPath} />))
  const dietListRender = dietList.map(item => (<IconWithText iconPath={item.iconPath} text={item.name} iconSize="h-5"/>))
  return (<div className="py-10 px-10 text-textDark">
    <SectionHeading
      sectionHeading="MEALS" 
      mainHeading="Well Menu AI chooses from 5,000+ recipes"
      classname="text-center"
    />
   <div className="flex justify-between mt-10 flex-col md:flex-row space-y-10 md:space-y-0">
        {mealsCardRender}

      <div className="hidden lg:block">
        <SubHeading classname="text-3xl font-semibold">
          Works with any diet:
        </SubHeading>

        <div className="flex flex-col space-y-4 mt-4 ">
          {dietListRender}
        </div>
      </div>
   </div>

  </div>)
}
export default MealsPage;