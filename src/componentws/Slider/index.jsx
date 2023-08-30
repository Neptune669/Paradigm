import Slider from "react-slick";
import cn from "classnames";
import SliderWrapper from "./_SlickSliderStyle";

const Slide = ({ image, title, description }) => {
	return (
		<div className="w-full py-12 h-[60vh] md:h-[65vh]  relative flex items-center rounded-2xl ">
			{/* {image && (
				<img
					src={image}
					className={"w-full h-full absolute z-0 object-cover"}
				/>
			)} */}
			<div
				className={cn(
					image &&
						"hero-image bg-black bg-opacity-40 w-full h-full absolute z-0"
				)}
			></div>
			<div className="mx-auto w-full flex flex-col z-20">
				<div className="xl:w-5/12">
					{title && (
						<h2 className="text-white font-bold text-xl md:text-2xl lg:text-4xl">
							{title}
						</h2>
					)}
					{description && (
						<p className="mt-8 mb-6 text-sm md:text-base text-white">
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
		<div className="max-w-7xl mx-auto">
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
