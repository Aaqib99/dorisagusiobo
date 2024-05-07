import { Box } from "@chakra-ui/react";
import DesignerHat from "./DesignerHat";
import Footer from "../../Footer/Footer";
import { TopbarUnsigned } from "../../../Components/SideBar/SideBar/Topbar";
import WildernessHero from "./WildernessHero";
import ProjectOverview from "./ProjectOverview";
import InterviewSights from "./InterviewSights";
import PainPoints from "./PainPoints";
import ProblemStatement from "./ProblemStatement";
import TargetAudience from "./TargetAudience";
import Huyen from "./Huyen";
import DesignPriciples from "./DesignPriciples";
import Gallery from "./Gallery";
import ColorPaletts from "./ColorPaletts";
import MockUp from "./MockUp";
import SimilarApps from "../../SimilarApps/SimilarApps";

function WildernessTourismApp() {
  return (
    <>
      <TopbarUnsigned />
      <WildernessHero />
      <Box>
        <ProjectOverview />
        <DesignerHat />
        <InterviewSights />
        <PainPoints />
        <ProblemStatement />
        <TargetAudience />
        <Huyen />
        <DesignPriciples />
        <Gallery />
        <ColorPaletts />
        <MockUp />
        <SimilarApps />
        <Footer />
      </Box>
    </>
  );
}

export default WildernessTourismApp;
