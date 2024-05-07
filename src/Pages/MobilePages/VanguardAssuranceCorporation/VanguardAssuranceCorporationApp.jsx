import { useEffect } from "react";
import Footer from "../../Footer/Footer";

import { TopbarUnsigned } from "../../../Components/SideBar/SideBar/Topbar";
import AssuranceHero from "./AssuranceHero";
import Overview from "./Overview";
// import Role from "./Role";
import KeyAreas from "./KeyAreas";
import VacProjectGoals from "./VacProjectGoals";
import IndustryResearch from "./IndustryResearch";
import Persona from "./Persona";
import ProjectDetails from "./ProjectDetails";
import JourneyMap from "./JourneyMap";
import UserTesting from "./UserTesting";
import FinalDesign from "./FinalDesign";
import ManageExistingQuoteScreens from "./ManageExistingQuoteScreens";
import SimilarApps from "../../SimilarApps/SimilarApps";

const VanguardAssuranceCorporationApp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopbarUnsigned />
      <AssuranceHero />
      <Overview />
      {/* <Role /> */}
      <KeyAreas />
      <VacProjectGoals />
      <IndustryResearch />
      <Persona />
      <ProjectDetails />
      <JourneyMap />
      <UserTesting />
      <FinalDesign />
      <ManageExistingQuoteScreens />
      <SimilarApps />

      <Footer />
    </>
  );
};

export default VanguardAssuranceCorporationApp;
