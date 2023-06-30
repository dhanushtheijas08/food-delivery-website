function FeatureCard({ iconPath, heading, content, borderColor }) {
  return (
    <div
      className={`w-fit space-y-1.5 border-4 border-${borderColor}-300 py-12 px-5 rounded-2xl `}
    >
      <div
        className={`bg-${borderColor}-100 mb-5 rounded-full w-fit px-3.5 py-3.5 mx-auto`}
      >
        <img src={iconPath} alt="icon" className="h-12" />
      </div>
      <label className="block text-center text-bold text-3xl text-textDark">
        {heading}
      </label>
      <p className="text-center text-textLigth text-base max-w-xs">{content}</p>
    </div>
  );
}

export default FeatureCard;
