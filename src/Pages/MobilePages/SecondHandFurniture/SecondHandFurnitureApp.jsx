// import { useEffect } from "react";
import FurnitureHero from "./FurnitureHero";
import { TopbarUnsigned } from "../../../Components/SideBar/SideBar/Topbar";
import OverviewFurniture from "./OverviewFurniture";
import Affinity from "./Affinity";
import Affinityimage from "./Affinityimage";
import ValueProposition from "./ValueProposition";
import Maika from "./Maika";
import UserJourneyMap from "./UserJourneyMap";
import BrandingGuidelines from "./BrandingGuidelines";
import Supplementary from "./Supplementary";
import LowFedilitySketch from "./LowFedilitySketch";
import HighFidelityMockup from "./HighFidelityMockup";
import SimilarApps from "../../SimilarApps/SimilarApps";
import Footer from "../../Footer/Footer";
// import Footer from "../../Footer/Footer";
// import { TopbarUnsigned } from "../../../Components/SideBar/SideBar/Topbar";
// import AssuranceHero from "./AssuranceHero";
// import Overview from "./Overview";
// import KeyAreas from "./KeyAreas";
// import VacProjectGoals from "./VacProjectGoals";
// import IndustryResearch from "./IndustryResearch";
// import Persona from "./Persona";
// import ProjectDetails from "./ProjectDetails";
// import JourneyMap from "./JourneyMap";
// import UserTesting from "./UserTesting";
// import FinalDesign from "./FinalDesign";
// import ManageExistingQuoteScreens from "./ManageExistingQuoteScreens";
// import SimilarApps from "../../SimilarApps/SimilarApps";

const SecondHandFurnitureApp = () => {

  // uncomment when this page is done
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <TopbarUnsigned />
      <FurnitureHero />
      <OverviewFurniture />
      <Affinity />
      <Affinityimage />
      <ValueProposition />
      <Maika />
      <UserJourneyMap />
      <BrandingGuidelines />
      <Supplementary />
      <LowFedilitySketch />
      <HighFidelityMockup />
      <SimilarApps />
      <Footer />
    </>
  );
};

export default SecondHandFurnitureApp;
