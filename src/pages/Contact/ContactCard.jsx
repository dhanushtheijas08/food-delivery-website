import SubHeading from "../../components/SubHeading.jsx";
import Button from "../../components/Button.jsx";
import "./contact.css";
function ContactCard() {
  return (
    <div className="max-w-7xl bg-[#e67e22] grid grid-cols-1 md:grid-cols-3 rounded-2xl text-[#45260a] shadow-2xl">
      <div className="mx-auto px-5 md:px-10 py-6 md:py-14 col-span-1 md:col-span-2">
        <SubHeading classname="text-[#45260a] text-xl md:text-2xl lg:text-4xl font-semibold">
          Get your first meal free!
        </SubHeading>

        <p className="max-w-2xl mt-2 text-sm lg:text-base font-medium opacity-90">
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well today. You can cancel or pause anytime. And the first meal is on
          us!
        </p>
        <div className="max-w-2xl mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="fname" className="text-lg font-medium">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className="rounded-lg py-2 pl-3.5 text-xl focus:outline-none"
              placeholder="Ram"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lname" className="text-lg font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className="rounded-lg py-2 pl-3.5 text-xl focus:outline-none"
              placeholder="Kumar"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="rounded-lg py-2 pl-3.5 text-xl focus:outline-none"
              placeholder="ram@gmail.com"
            />
          </div>
          <button className="text-xl bg-[#45260a] text-white h-fit self-end py-2 rounded-lg md:mt-2 lg:mt-0">
            Try Now
          </button>
        </div>
      </div>
      <div className="orange-filter rounded-r-2xl hidden md:block"></div>
    </div>
  );
}

export default ContactCard;
