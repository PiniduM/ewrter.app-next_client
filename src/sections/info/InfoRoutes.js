import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

//const ContactUsPage = lazy(() => import("./sections/about_us/ContactUsPage.js"));
//const AboutUsPage = lazy(() => import("./sections/about_us/AboutUsPage.js"));
const Header = lazy(() => import("../../components/Headers/Header.js"));
const Footer = lazy(() => import("../../components/Footers/Footer.js"));
const ContactUsPage = lazy(() => import("./contactUs/ConatactUsPage.js"));
const PrivecyPolicyPage = lazy(() =>
  import("./privecyPolicy/PrivecyPolicyPage.js")
);
const TermsOfServicePage = lazy(() =>
  import("./terms_of_service/TermsOfServicePage.js")
);
const CreditsPage = lazy(() => import("./creditsPage/Creditspage.js"));

const InfoRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact_us" exact element={<ContactUsPage />}></Route>
        <Route
          path="/privecy_policy"
          exact
          element={<PrivecyPolicyPage />}
        ></Route>
        <Route
          path="/terms_of_service"
          exact
          element={<TermsOfServicePage />}
        ></Route>
        <Route path="/credits" exact element={<CreditsPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default InfoRoutes;
// arrange according to google adsens requirements
// add a footer
