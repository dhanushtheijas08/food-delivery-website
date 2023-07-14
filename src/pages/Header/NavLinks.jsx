import Button from "../../components/Button.jsx";
import MobileNavBar from "./MobileNavBar.jsx";
import "./nav.css";
function NavLinks() {
  return (
    <nav className="lg:w-1/2 lg:flex lg:items-center">
      <div className="lg:hidden block relative border-2 rounded-[3px] border-gray-800 w-fit px-1.5 py-3 flex items-center justify-center">
        <div className="mobile-nav-bar nav-toogle-bar">
          <div className="">
            <MobileNavBar />
          </div>
        </div>
      </div>

      <ol className="hidden lg:flex w-full flex text-lg font-medium items-center justify-between">
        <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            How it works
          </a>
        </li>
        <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            Meals
          </a>
        </li>
        {/* <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            Testimonial
          </a>
        </li> */}
        <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            Pricing
          </a>
        </li>
        <Button classname="primary-btn" primary>
          Try for free
        </Button>
      </ol>
    </nav>
  );
}

export default NavLinks;
