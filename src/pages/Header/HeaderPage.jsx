import NavLinks from "./NavLinks.jsx";
import Heading from "../../components/Heading.jsx";
function HeaderPage() {
  return (
    <header className="bg-orangeLight px-10 py-4 flex justify-between items-center text-textDark">
      <Heading>Well Menu.com</Heading>
      <NavLinks />
    </header>
  );
}

export default HeaderPage;
