import back from "../AboutUs/background.svg";
const ImageWithBackground = ({ img }) => {
  return (
    <div className="border rounded-2xl border-[#1F2020] pt-4 pl-4">
      <figure className="flex items-center justify-center">
        <img src={back} alt="" />
        <img className="absolute" src={img} alt="" />
      </figure>
    </div>
  );
};

export default ImageWithBackground;
