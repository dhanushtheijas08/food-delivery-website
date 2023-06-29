function ExtraOffers({ iconPath, heading, content }) {
  return (
    <div className="px-10 py-10">
      <div className="max-w-xs bg-red-100 space-y-5">
        <img src={iconPath} alt="icon" className="h-8" />
        <label className="text-bold text-3xl">{heading}</label>
        <p className="text-textLigth text-base">{content}</p>
      </div>
    </div>
  );
}

export default ExtraOffers;
