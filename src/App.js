import "./App.css";
import HeaderPage from "./pages/Header/HeaderPage.jsx";
import HeroSection from "./pages/HeroSection/HeroSection.jsx";
import MealsPage from "./pages/Meals/MealsPage.jsx"
import PricePage from "./pages/Price/PricePage.jsx"
function App() {

  return (
    <div className="App font-rubik">
      <HeaderPage className="" />
      <HeroSection />
      <MealsPage />
      <PricePage />
    </div>
  );
}

export default App;
