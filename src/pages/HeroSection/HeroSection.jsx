import Button from "../../components/Button.jsx";
import heroImg from "../../asserts/hero-section/hero-section-img.png";
function HeroSection() {
  return (
    <div className="bg-orangeLight py-5 flex flex-col lg:flex-row md:items-center lg:items-start lg:justify-between">
      <div className="px-10">
        <h2 className="text-center lg:text-left text-[1.37rem] md:text-5xl font-bold md:font-medium text-textDark md:text-w-xl lg:max-w-lg md:mt-12">
          A healthy meal delivered to your door, every single day
        </h2>
        <p className="text-textLigth font-medium md:font-normal max-w-md md:max-w-xl lg:max-w-md text-sm md:text-xl md:opacity-90 mt-4 md:mt-8 text-center lg:text-left mx-auto lg:mx-0">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <div className="flex flex-col md:flex-row md:max-w-xl lg:max-w-md gap-3 md:gap-8 md:mx-auto lg:mx-0 mt-8">
          <Button classname="text-xl w-full primary-btn" primary>
            Start eating well
          </Button>
          <Button classname="w-full">Learn More</Button>
        </div>
        <div>
          <div className="flex"></div>
        </div>
      </div>
      <div>
        <img
          src={heroImg}
          alt="hero section"
          className="w-[40rem] lg:w-[43rem] md:w-[35rem] mt-5 md:mt-10 lg:mt-0"
        />
      </div>
    </div>
  );
}

export default HeroSection;
/* 
import heroImg from "../../asserts/hero-section/hero-section-img.png";
import face1 from "../../asserts/hero-section/img-1.jpg";
import face2 from "../../asserts/hero-section/img-2.jpg";
import face3 from "../../asserts/hero-section/img-3.jpg";
import face4 from "../../asserts/hero-section/img-4.jpg";
import face5 from "../../asserts/hero-section/img-5.jpg";
*/
