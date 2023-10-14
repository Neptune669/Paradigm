import Slider from "react-slick";
import cn from "classnames";
import SliderWrapper from "./_SlickSliderStyle";

const Slide = ({ image, title, description }) => {
  return (
    <div className="w-full py-12 h-[60vh] md:h-[65vh]  px-4 lg:px-0 relative flex items-center rounded-2xl ">
      {/* {image && (
				<img
					src={image}
					className={"w-full h-full absolute z-0 object-cover"}
				/>
			)} */}
      <div
        className={cn(
          image &&
            "hero-image bg-[#010f13] bg-opacity-40 w-full h-full absolute z-0"
        )}
      ></div>
      <div className="z-20 flex flex-col w-full mx-auto">
        <div className=" md:w-full xl:w-full">
          {title && (
            <h2 className="w-[90%] text-xl font-bold text-white md:text-2xl lg:text-7xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="w-2/5 mt-8 mb-6 text-sm text-neutral-500 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
const HomeSlider = ({ slides }) => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="w-full px-8 mx-auto max-w-7xl">
      <SliderWrapper>
        <Slider {...settings}>
          {slides &&
            slides.map &&
            slides.map((item) => {
              return (
                <ul key={item._key}>
                  <Slide
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </ul>
              );
            })}
        </Slider>
      </SliderWrapper>
    </div>
  );
};
export default HomeSlider;
