import Nav from "../componentws/nav";
import About from "../componentws/AboutUs/about";
import Who from "../componentws/AboutUs/who";
import Vision from "../componentws/AboutUs/vision";
import Mission from "../componentws/AboutUs/mission";
import Ceo from "../componentws/AboutUs/ceo";
import Footer from "../componentws/footer";
import Team from "../componentws/AboutUs/team";
import CeoTwo from "../componentws/AboutUs/CeoTwo";
import AboutHolding from "../componentws/AboutUs/aboutHolding";
const AboutUs = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <About />
        <Who />
      </main>
      <div className="flex flex-col gap-20 mx-auto overflow-x-hidden max-w-7xl ">
        <Vision />
        <Mission />
        <Ceo />
        <CeoTwo />
        <AboutHolding />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
