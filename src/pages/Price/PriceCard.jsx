import IconWithText from "../../components/IconWithText.jsx";
import Button from "../../components/Button.jsx";
import checkIcon from "../../asserts/check.png";
import "./card.css";
function PriceCard({ isPrimary, price, tag }) {
  const primaryCard = isPrimary ? "bg-[#fae5d3] border-0 primary" : null;
  return (
    <div
      className={`w-fit text-center border-2 border-[#fae5d3] rounded-2xl px-9 py-14 md:px-9 lg:px-20 lg:py-20 mt-20 space-y-6 lg:space-y-8 relative overflow-hidden ${primaryCard}`}
    >
      {/* Card Heading */}
      <label className="text-orangeDark font-medium text-xl">{tag}</label>

      {/* Price */}
      <p className="text-center text-[#6f6f6f]">
        <span className="text-textDark font-medium block text-5xl">
          <small className="text-2xl">$</small>
          {price}
        </span>
        per month. That's just $13 per meal!
      </p>

      {/* IconWithText Section */}
      <div className="text-textLigth mx-auto w-fit">
        <IconWithText iconPath={checkIcon} text="1 meal per day" />
        <IconWithText iconPath={checkIcon} text="Order from 11am to 9pm" />
        <IconWithText iconPath={checkIcon} text="Delivery is free" />
      </div>
      {/* function Button({ children, primary, classname }) { */}

      <Button primary classname="lg:mr-8">
        Start eating well
      </Button>
    </div>
  );
}

export default PriceCard;
