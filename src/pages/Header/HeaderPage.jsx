import NavLinks from "./NavLinks.jsx";
function HeaderPage() {
  return (
    <header className="bg-orangeLight px-10 py-4 flex justify-between items-center text-textDark">
      <h2 className="text-3xl font-medium ">Well Menu.com</h2>
      <NavLinks />
    </header>
  );
}

export default HeaderPage;
