const CardPreview = ({ title, image, date }) => {
  return (
    <li className="relative flex flex-col justify-end overflow-hidden bg-white shadow-none h-80 rounded-xl ">
      {image && (
        <figure className="rounded-xl">
          <div className="absolute inset-0 z-20 opacity-50 bg-gradient-to-b from-transparent to-black"></div>
          <img
            src={image}
            className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-transparent bg-center bg-cover rounded-xl"
          />
        </figure>
      )}
      <div className="relative z-30 pb-4 pl-3 pr-12 font-semibold">
        <h3 className="mb-3 text-2xl text-white">{title}</h3>
        <h4 className="text-sm uppercase ">{date}</h4>
      </div>
    </li>
  );
};
const blogs = [
  {
    title: "What Event Organizers Need to Know",
    image:
      "https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "April 1, 2022",
  },
  {
    title: "What Event Organizers Need to Know",
    image:
      "https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "April 1, 2022",
  },
  {
    title: "What Event Organizers Need to Know",
    image:
      "https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "April 1, 2022",
  },
];
const BlogPostsList = () => {
  return (
    <div className="px-8 max-w-7xl lg:mx-auto ">
      <p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
        Blog
      </p>
      <div className="flex flex-col mb-16 md:flex-row md:justify-between md:items-center">
        <h2 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl md:mb-0">
          Our Recent Articles
        </h2>
        <p className="flex items-center gap-1 font-semibold">
          <a href="/blogs">
            <span>View All Articles</span>
          </a>
          <span>
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.74988 14.1149H14.2499"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99988 8.86487L14.2499 14.1149L8.99988 19.3649"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      </div>{" "}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.map((blog, index) => {
          return <CardPreview key={index} {...blog} />;
        })}
      </ul>
    </div>
  );
};

export default BlogPostsList;
