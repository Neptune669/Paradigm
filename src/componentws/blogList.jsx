const BlogList = ({ imageUrl, tagline, date, headline, description }) => {
  return (
    <div className="flex flex-col gap-3 w-80 lg:w-96 ">
      <div className="">
        <figure>
          <img src={imageUrl} alt="" />
        </figure>
      </div>

      <ul className="flex items-center justify-between">
        <li className="text-xs font-bold uppercase">{tagline}</li>
        <li className="text-[#6C757D]">{date}</li>
      </ul>
      <div className="">
        <h1 className="text-2xl font-bold leading-6">{headline}</h1>
        <p className="text-[#6C757D] min-w-full">{description}</p>
      </div>
    </div>
  );
};

export default BlogList;
