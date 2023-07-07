function FeatureCard({ iconPath, heading, content, borderColor }) {
  const border = `border-${borderColor}-300`;
  const background = `bg-${borderColor}-100`;
  // console.log({ border });
  // console.log({ background });
  return (
    <div
      className={`w-fit space-y-1.5 border-4 ${border} py-5 px-2 lg:py-12 lg:px-5 rounded-2xl `}
    >
      <div
        className={`${background} mb-5 rounded-full w-fit px-3.5 py-3.5 mx-auto`}
      >
        <img src={iconPath} alt="icon" className="h-12" />
      </div>
      <label className="block text-center text-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl text-textDark ">
        {heading}
      </label>
      <p className="text-center text-textLigth text-sm lg:text-base max-w-xs">
        {content}
      </p>
    </div>
  );
}

export default FeatureCard;
