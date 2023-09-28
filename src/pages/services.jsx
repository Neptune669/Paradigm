import LayoutContainer from "../componentws/LayoutContainer";
import Nav from "../componentws/nav";
import Footer from "../componentws/footer";
import ServicesHeader from "../componentws/servicesHeader";
import ServicesMain from "../componentws/servicesMain";
const Services = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <LayoutContainer>
        <ServicesHeader />
        <ServicesMain />
      </LayoutContainer>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;
