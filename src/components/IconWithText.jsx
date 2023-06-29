function IconWithText({
  iconPath,
  boldText = "",
  text,
  boldTextPosition = "",
  iconSize = "",
}) {
  return (
    <div className="flex gap-3 items-center">
      <img src={iconPath} alt="icon" className={`h-8 ${iconSize}`} />
      {boldTextPosition === "front" ? (
        <p className="md:text-lg lg:text-xl">
          <label className="font-medium">{boldText}</label> {text}
        </p>
      ) : (
        <p className="md:text-lg lg:text-xl">
          {text} <label className="font-medium">{boldText}</label>
        </p>
      )}
    </div>
  );
}

export default IconWithText;
