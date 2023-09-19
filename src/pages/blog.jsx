import Nav from "../componentws/nav";
import Footer from "../componentws/footer";
import BlogHero from "../componentws/blogHeader";
import BlogMain from "../componentws/blogMain";
import Faq from "../componentws/faq";

const Blog = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex flex-col gap-20 px-8 mx-auto overflow-hidden max-w-7xl ">
        <BlogHero />
        <BlogMain />
      </main>
      <div className="">
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
