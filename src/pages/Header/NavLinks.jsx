import Button from "../../components/Button.jsx";

function NavLinks() {
  return (
    <nav className="hidden w-1/2 lg:flex lg:items-center ">
      <ol className="w-full flex text-lg font-medium items-center justify-between">
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
        <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            Testimonial
          </a>
        </li>
        <li>
          <a
            href="#sample"
            className="hover:text-orangeDark transition duration-200"
          >
            Pricing
          </a>
        </li>
        <Button primary>Try for free</Button>
      </ol>
    </nav>
  );
}

export default NavLinks;
