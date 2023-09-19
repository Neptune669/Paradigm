import BlogList from "./blogList";
import image from "../assets/Image.png";
const articleData = [
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
  {
    imageUrl: image,
    tagline: "Sample Tagline",
    date: "October 21",
    headline: "Post headline goes here",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita, nobis vel at, sint eius beatae",
  },
];
const BlogMain = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-medium">Articles</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {articleData.map((item, index) => (
          <BlogList key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default BlogMain;
