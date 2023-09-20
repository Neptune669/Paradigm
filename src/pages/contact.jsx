import ContactHeader from "../componentws/ContactHeader";
import Branches from "../componentws/branches";
import ContactMain from "../componentws/contactMain";
import Footer from "../componentws/footer";
import Nav from "../componentws/nav";
import Faq from "../componentws/faq";
const Contact = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex flex-col gap-20 px-8 mx-auto overflow-hidden max-w-7xl ">
        <ContactHeader />
        <ContactMain />
        <Branches />
        <Faq />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
