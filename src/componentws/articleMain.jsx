import ArticleContent from "./articleContent";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import backarrow from "../assets/arrow.svg";
const article = [
  {
    title:
      "New collection launches — a collaboration between two great designers",
    date: "October 21",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
    // id: "1",
  },
];
const ArticleMain = () => {
  return (
    <div className="flex flex-col max-w-4xl gap-4 mx-auto mt-16">
      <div className="flex items-center ">
        <Link to="/blogs">
          <img className="inline-block mr-6" src={backarrow} alt="" /> BACK TO
          blog
        </Link>
      </div>
      {article.map((item) => (
        <ArticleContent key={item.id} article={item} />
      ))}
    </div>
  );
};

export default ArticleMain;
