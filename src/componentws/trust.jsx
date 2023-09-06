import Marquee from "react-fast-marquee";

const Trust = () => {
  const logosRowOne = [];
  const logosRowTwo = [];
  for (let i = 1; i <= 16; i++) {
    logosRowOne.push({
      logo: (
        <figure className="flex items-center justify-center w-20 h-12 bg-white rounded-lg">
          <img src={`/logos/${i}.svg`} className="w-full h-full rounded-lg" />
        </figure>
      ),
    });
  }
  for (let i = 1; i <= 16; i++) {
    logosRowTwo.push({
      logo: (
        <figure className="flex items-center justify-center w-20 h-12 p-2 bg-white rounded-lg">
          <img src={`/logos/rowTwo/${i}.png`} className="p-2 rounded-lg " />
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
        className="flex items-center gap-5"
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
        className="flex items-center gap-5 mt-10 overflow-hidden"
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
