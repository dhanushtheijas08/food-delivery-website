import FooterLinks from "./FooterLinks.jsx";
import Heading from "../../components/Heading.jsx";
function Footer() {
  const footerLinks = [
    {
      title: "Contact us",
      links: [
        "623 Harrison St., 2nd Floor, San Francisco, CA 94107",
        "415-201-6370 hello@omnifood.com",
      ],
    },
    {
      title: "Account",
      links: ["Create account", "Sign in", "iOS app", "Android app"],
    },
    {
      title: "Company",
      links: ["About Omnifood", "For Business", "Cooking partners", "Careers"],
    },
    {
      title: "Resources",
      links: ["Recipe directory", "Help center", "Privacy & terms"],
    },
  ];
  const renderFooter = footerLinks.map((footerLink) => (
    <FooterLinks footerLink={footerLink} />
  ));

  return (
    <footer className="grid grid-cols-5 px-10">
      <div>
        <h2 className="text-textDark opacity-90 text-2xl md:text-2xl font-medium">
          Well Menu.com
        </h2>

        {/* Social Links */}
        <ol className="flex">
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ol>

        <small>Copyright © 2023 by Omnifood, Inc. All rights reserved.</small>
      </div>
      {renderFooter}
    </footer>
  );
}

export default Footer;