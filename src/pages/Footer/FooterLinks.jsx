function FooterLinks({ footerLink }) {
  const { links, title } = footerLink;
  const renderContent = links.map((link) => (
    <li>
      <a href="#">{link}</a>
    </li>
  ));
  return (
    <div className={`mt-5 place-self-center`}>
      <h3 className="text-sm md:text-xl lg:text-2xl font-medium opacity-70">
        {footerLink.title}
      </h3>
      <ol className="opacity-60 space-y-1 mt-2 text-xs md:text-sm lg:text-base">
        {renderContent}
      </ol>
    </div>
  );
}

export default FooterLinks;
