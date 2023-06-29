import "./App.css";
import HeaderPage from "./pages/Header/HeaderPage.jsx";
import HeroSection from "./pages/HeroSection/HeroSection.jsx";
import MealsPage from "./pages/Meals/MealsPage.jsx";
import PricePage from "./pages/Price/PricePage.jsx";
import ExtraOffers from "./pages/ExtraOffers/ExtraOffers.jsx";
import extraFeatureIcon from "./asserts/check.png";
function App() {
  return (
    <div className="App font-rubik">
      <HeaderPage className="" />
      <HeroSection />
      <MealsPage />
      <PricePage />
      <ExtraOffers
        iconPath={extraFeatureIcon}
        heading="Never cook again!"
        content="Our subscriptions cover 365 days per year, even including major holidays."
      />
    </div>
  );
}

export default App;
