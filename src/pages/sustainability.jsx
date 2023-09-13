import Footer from "../componentws/footer";
import Nav from "../componentws/nav";
import SucHero from "../componentws/sushero";
import Sdg from "../componentws/sdj";
const Sustainability = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="flex flex-col gap-20 mx-auto overflow-hidden max-w-7xl ">
          <SucHero />
          <Sdg />
        </div>
      </main>
    </>
  );
};

export default Sustainability;
