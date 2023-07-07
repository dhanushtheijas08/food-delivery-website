import FooterLinks from "./FooterLinks.jsx";
import Heading from "../../components/Heading.jsx";
function Footer() {
  const footerLinks = [
    {
      title: "Account",
      links: ["Create account", "Sign in", "iOS app", "Android app"],
    },
    {
      title: "Company",
      links: ["About US", "For Business", "Cooking partners", "Careers"],
    },
    {
      title: "Resources",
      links: ["Recipe directory", "Help center", "Privacy & terms"],
    },
    {
      title: "Contact us",
      links: [
        "623 Harrison St.,",
        " San Francisco, CA 94107",
        "hello@WellMenu.com",
      ],
    },
  ];
  const renderFooter = footerLinks.map((footerLink) => (
    <FooterLinks footerLink={footerLink} />
  ));

  return (
    <footer className="mt-10 mb-5 text-center">
      <h2 className="text-textDark opacity-90 text-2xl md:text-2xl font-medium">
        Well Menu.com
      </h2>
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

      <p className="text-sm ">
        Copyright © 2023 by Well Menu.Com, Inc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
