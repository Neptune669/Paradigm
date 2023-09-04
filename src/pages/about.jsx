import Nav from "../componentws/nav";
import About from "../componentws/AboutUs/about";
import Who from "../componentws/AboutUs/who";
import Vision from "../componentws/AboutUs/vision";
import Mission from "../componentws/AboutUs/mission";
import Ceo from "../componentws/AboutUs/ceo";
const AboutUs = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="px-8 mx-auto max-w-7xl">
        <About />
        <Who />
        <Vision />
        <Mission />
        <Ceo />
      </div>
    </div>
  );
};

export default AboutUs;
