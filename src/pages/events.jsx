import Nav from "../componentws/nav";
import EventHero from "../componentws/eventhero";
import EventMain from "../componentws/eventmain";
import EventGallery from "../componentws/eventsgallary";
import Footer from "../componentws/footer";
import Faq from "../componentws/faq";
const Events = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="flex flex-col gap-20 mx-auto overflow-x-hidden max-w-7xl ">
          <EventHero />
          <EventMain />
          <EventGallery />
        </div>
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Events;
