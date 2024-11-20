import HeroSection from "../components/common/HeroSection";
import Cities from "../components/capitalCities/Cities";
import TabContent from "../components/description/TabContent";

const HomePage = () => {
  return (
    <div>
      <HeroSection title="Aktuální počasí" />
      <Cities />
      <TabContent/>
    </div>
  );
};

export default HomePage;
