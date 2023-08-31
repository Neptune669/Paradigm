import Marquee from "react-fast-marquee";

const Trust = () => {
	const logosRowOne = [];
	const logosRowTwo = [];
	for (let i = 1; i <= 16; i++) {
		logosRowOne.push({
			logo: (
				<figure className="h-12 w-20 bg-white flex items-center justify-center rounded-lg">
					<img src={`/logos/${i}.svg`} className="h-full w-full rounded-lg" />
				</figure>
			),
		});
	}
	for (let i = 1; i <= 16; i++) {
		logosRowTwo.push({
			logo: (
				<figure className="h-12 w-20 bg-white flex items-center justify-center rounded-lg p-2">
					<img src={`/logos/rowTwo/${i}.png`} className=" rounded-lg p-2" />
				</figure>
			),
		});
	}
	return (
		<div className="mt-20">
			<p className="text-[#48AECD] text-center font-semibold text-sm uppercase mb-10">
				Trusted by the world&apos;s best Brands
			</p>
			<Marquee
				direction="left"
				pauseOnHover
				className="flex gap-5 items-center"
			>
				<div className="flex items-center gap-5">
					{logosRowOne.map(({ logo }) => {
						return logo;
					})}
				</div>
			</Marquee>
			<Marquee
				direction="right"
				pauseOnHover
				className="flex gap-5 items-center mt-10"
			>
				<div className="flex items-center gap-5 ">
					{logosRowTwo.map(({ logo }) => {
						return logo;
					})}
				</div>
			</Marquee>
		</div>
	);
};

export default Trust;
