import back from "../AboutUs/background.svg";
const ImageWithBackground = ({ img, name, job }) => {
  return (
    <div className="border rounded-2xl border-[#1F2020] pt-4 pl-4">
      <figure className="relative flex items-center justify-center group">
        <img src={back} alt="" />
        <img className="absolute bottom-0 :" src={img} alt="" />
        <div className="absolute bottom-0 flex flex-col items-center gap-0 group-hover:visible ">
          {name && (
            <p className="visible mb-3 text-lg font-semibold lg:hidden group-hover:block p-main">
              {name}
            </p>
          )}
          {job && (
            <h2 className="mb-3 text-sm lg:hidden group-hover:block">{job}</h2>
          )}
        </div>
      </figure>
    </div>
  );
};

export default ImageWithBackground;
