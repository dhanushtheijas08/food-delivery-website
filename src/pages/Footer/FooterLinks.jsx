function FooterLinks({ footerLink }) {
  const { links, title } = footerLink;
  const renderContent = links.map((link) => <li>{link}</li>);
  return (
    <div>
      <h3 className="text-2xl font-semibold opacity-70">{footerLink.title}</h3>
      <ol className="opacity-60 font-medium space-y-2.5 mt-3.5">
        {renderContent}
      </ol>
    </div>
  );
}

export default FooterLinks;
