import "./App.css";
import HeaderPage from "./pages/Header/HeaderPage.jsx";
import HeroSection from "./pages/HeroSection/HeroSection.jsx";
import MealsPage from "./pages/Meals/MealsPage.jsx";
import PricePage from "./pages/Price/PricePage.jsx";
import FeaturesPage from "./pages/Features/FeaturesPage.jsx";
import extraFeatureIcon from "./asserts/check.png";
function App() {
  return (
    <div className="App font-rubik">
      <HeaderPage className="" />
      <HeroSection />
      <MealsPage />
      <PricePage />
      <FeaturesPage />
    </div>
  );
}

export default App;
