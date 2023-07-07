function FooterLinks({ footerLink }) {
  const { links, title } = footerLink;
  const renderContent = links.map((link) => (
    <li>
      <a href="#">{link}</a>
    </li>
  ));
  return (
    <div className="place-self-center">
      <h3 className="text-2xl font-medium opacity-70">{footerLink.title}</h3>
      <ol className="opacity-60  space-y-2.5 mt-3.5">{renderContent}</ol>
    </div>
  );
}

export default FooterLinks;
