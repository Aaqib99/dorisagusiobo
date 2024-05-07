// import React from "react";
import HeroSection from "./HeroSection";
import Footer from "../Footer/Footer";
import { Box } from "@chakra-ui/react";
import { TopbarUnsigned } from "../../Components/SideBar/SideBar/Topbar";
import ProfileSection from "../ProfileSection/ProfileSection";
import MobilesSection from "../MobilesSections/PublicFeature";

export const PublicLanding = () => {

  return (
    <>
      <TopbarUnsigned />
      <Box p="4">
        {/* navbar */}
        <HeroSection />
        <ProfileSection />
        <MobilesSection />
      </Box>
      <Footer />
    </>
  );
};
