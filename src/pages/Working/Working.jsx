import SectionHeading from "../../components/SectionHeading.jsx";
import img1 from "../../asserts/working-section/img-1.png";
function Working() {
  return (
    <section className="px-10 py-10">
      <SectionHeading
        sectionHeading="HOW IT WORKS"
        mainHeading="Your daily dose of health in 3 simple steps"
      />
      <div className="flex mt-10">
        <div>
          <label className="opacity-40 text-8xl font-medium">01</label>
          <h3 className="text-4xl text-textDark font-semibold">
            Tell us what you like (and what not)
          </h3>
          <p className="text-textLigth max-w-xl text-lg opacity-90">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="">
          <img src={img1} alt="signup mobile screen" className="bg-red-100" />
        </div>
      </div>
    </section>
  );
}

export default Working;
