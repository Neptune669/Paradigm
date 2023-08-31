import Marquee from "react-fast-marquee";

const Trust = () => {
	const logosRowOne = [];
	for (let i = 1; i <= 18; i++) {
		logosRowOne.push({
			logo: (
				<div className="h-14 w-20 rounded-lg bg-white">
					<img src={`/logos/${i}.svg`} className="h-full w-full rounded-lg" />
				</div>
			),
		});
	}
	const logosRowTwo = [];
	for (let i = 1; i <= 19; i++) {
		logosRowTwo.push({
			logo: (
				<div className="h-14 w-20 rounded-lg bg-white flex items-center justify-center">
					<img src={`/logos/rowTwo/${i}.png`} className=" rounded-lg" />
				</div>
			),
		});
	}
	return (
		<div className="mt-20">
			<div className=" max-w-fit mx-auto ">
				<p className="text-[#48AECD] text-center font-semibold text-sm uppercase mb-10">
					Trusted by the world&apos;s best Brands
				</p>
			</div>
			<Marquee pauseOnHover className="flex gap-5">
				<div className="flex items-center gap-5">
					<div className="">
						<div className="h-10 w-20 bg-white rounded-lg"></div>
					</div>
					{logosRowOne.map((logo) => {
						return logo.logo;
					})}
				</div>
			</Marquee>
			<Marquee
				direction="right"
				pauseOnHover
				className="mt-10 flex gap-5 items-center"
			>
				<div className="flex items-center gap-5 ">
					{logosRowTwo.map((logo) => {
						return logo.logo;
					})}
				</div>
			</Marquee>
		</div>
	);
};

export default Trust;
