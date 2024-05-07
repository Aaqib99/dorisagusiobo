import { Routes, Route } from "react-router-dom";
import { PublicLanding } from "./Pages/Customer/PublicLanding";
import ExploreServices from "./Pages/Customer/ExploreServices";
import CertificationProcess from "./Pages/Customer/CertificationProcess";
import PreparingCyber from "./Pages/Customer/PreparingCyber";
import WildernessTourismApp from "./Pages/MobilePages/WildernessTourismApp/WildernessTourismApp";
import ContinueReading from "./Pages/MobilePages/ContinueReading/ContinueReading";
import PasswordManagement from "./Pages/MobilePages/PasswordManagement/PasswordManagement";
import CheckVulnerability from "./Pages/MobilePages/CheckVulnerability/CheckVulnerability";
import AntiVirus from "./Pages/MobilePages/AntiVirus/AntiVirus";
import ContactAdmin from "./Pages/ContactAdmin/ContactAdmin";
import { BrowserRouter as Router } from "react-router-dom";
import VanguardAssuranceCorporationApp from "./Pages/MobilePages/VanguardAssuranceCorporation/VanguardAssuranceCorporationApp";
import SecondHandFurnitureApp from "./Pages/MobilePages/SecondHandFurniture/SecondHandFurnitureApp";
import MasteryHubWebsiteLanding from "./Pages/WebsitePages/TheMasteryHub/MasteryHubWebsiteLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLanding />} />
        <Route path="/wilderness-tourism-app" element={<WildernessTourismApp />} />
        <Route path="/vanguard-assurance-corporation-app" element={<VanguardAssuranceCorporationApp />} />
        <Route path="/second-hand-furniture-app" element={<SecondHandFurnitureApp />} />
        <Route path="/continue-reading" element={<ContinueReading />} />
        <Route path="/password-management" element={<PasswordManagement />} />
        <Route path="/vulnerability-page" element={<CheckVulnerability />} />
        <Route path="/anti-virus" element={<AntiVirus />} />
        <Route path="/explore-services" element={<ExploreServices />} />
        <Route path="/the-mastery-hub-website" element={<MasteryHubWebsiteLanding />} />
        <Route path="/preparing-cyber" element={<PreparingCyber />} />
        <Route path="/contact-admin" element={<ContactAdmin />} />
        <Route path="/certification-process" element={<CertificationProcess />} />
      </Routes>
    </Router>
  );
}

export default App;
