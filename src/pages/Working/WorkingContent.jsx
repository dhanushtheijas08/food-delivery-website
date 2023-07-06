function WorkingContent({ number, title, content }) {
  return (
    <div>
      <label className="block opacity-40 text-8xl font-medium text-center md:text-left">
        {number}
      </label>
      <h3 className="text-center md:text-left text-xl lg:text-[2.2rem] md:text-[1.8rem] text-textDark font-semibold text-balance mt-2 md:leading-8">
        {title}
      </h3>
      <p className="block text-textLigth max-w-xl text-base text-center md:text-left md:text-lg opacity-90 mt-6">
        {/* Never again waste time thinking about what to eat! Well Menu.com AI
          will create a 100% personalized weekly meal plan just for you. */}
        {content}
      </p>
    </div>
  );
}

export default WorkingContent;
