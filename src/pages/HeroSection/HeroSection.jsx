import Button from "../../components/Button.jsx";
import heroImg from "../../asserts/hero-section/hero-section-img.png";
import face1 from "../../asserts/hero-section/img-1.jpg";
import face2 from "../../asserts/hero-section/img-2.jpg";
import face3 from "../../asserts/hero-section/img-3.jpg";
import face4 from "../../asserts/hero-section/img-4.jpg";
import face5 from "../../asserts/hero-section/img-5.jpg";
function HeroSection() {
  return (
    <div className="px-10 bg-orangeLight py-5 flex sm:flex-col lg:flex-row">
      <div>
        <h2 className="text-5xl font-semibold text-textDark max-w-lg mt-12">
          A healthy meal delivered to your door, every single day
        </h2>
        <p className="text-textLigth max-w-md text-xl opacity-90 mt-8">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <div className="flex md:gap-14 mt-8">
          <Button classname="text-xl" primary>
            Start eating well
          </Button>
          <Button>Learn More</Button>
        </div>
        <div>
          <div className="flex">
            <img
              src={face1}
              alt="sample face"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="hero section" className="w-[43rem]" />
      </div>
    </div>
  );
}

export default HeroSection;
