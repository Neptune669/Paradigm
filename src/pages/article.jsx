import Footer from "../componentws/footer";
import Nav from "../componentws/nav";
import ArticleMain from "../componentws/articleMain";
import Form from "../componentws/form";

const Article = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="flex flex-col gap-20 mx-auto overflow-x-hidden max-w-7xl ">
          <ArticleMain />
          <Form />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Article;
