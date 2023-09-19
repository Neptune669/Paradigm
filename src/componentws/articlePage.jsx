import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleContent from "../componentws/articleContent";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Simulating fetching the article data based on the ID
    const fetchArticle = async () => {
      // Replace this with your actual article fetching logic
      // For example, you can make an API request to retrieve the article data
      const articleData = await fetch(`blogs/${id}`);
      const article = await articleData.json();
      setArticle(article);
    };

    fetchArticle();
  }, [id]);

  return (
    <div>
      {article ? <ArticleContent article={article} /> : <p>Loading...</p>}
    </div>
  );
};

export default ArticlePage;
