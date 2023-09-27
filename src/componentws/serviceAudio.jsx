import dot from "../assets/dot.svg";

const firstList = [
  { text: "Beam Lights" },
  { text: "Beam Lights" },
  { text: "Beam Lights" },
  { text: "Beam Lights" },
  { text: "Beam Lights" },
  { text: "Beam Lights" },
  { text: "Beam Lights" },
];
const SecondList = [
  { text: "Colum Speakers" },
  { text: "Line Array Speakers" },
  { text: "Low-Profile Stage Sound Monitors," },
  { text: "Digital Sound Mixers" },
  { text: "Digital Wireless Head, Hand and Conference Mics" },
];
const ThirdList = [
  { text: "Colum Speakers" },
  { text: "Line Array Speakers" },
  { text: "Low-Profile Stage Sound Monitors," },
  { text: "Digital Sound Mixers" },
  { text: "Digital Wireless Head, Hand and Conference Mics" },
];
const ServiceAudio = ({ title }) => {
  return (
    <section className="flex justify-between ">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold ">{title}</h1>

        <ul className="flex flex-col justify-start gap-1 list-disc">
          <li className="text-base font-bold list-none poppins-font">
            <img className="inline-block mr-2" src={dot} alt="blue dot" /> Light
            Systems
          </li>
          {firstList.map((item, index) => (
            <li key={index} className="ml-10 text-base poppins-font">
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col justify-start gap-1 list-disc">
          <li className="text-base font-bold list-none poppins-font">
            <img className="inline-block mr-2" src={dot} alt="blue dot" /> Sound
            Systems
          </li>
          {SecondList.map((item, index) => (
            <li key={index} className="ml-10 text-base poppins-font">
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3 ">
          {ThirdList.map((item, index) => (
            <li key={index} className="text-base font-bold poppins-font">
              <img className="inline-block" src={dot} alt={item} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img src="sph.svg" alt="" />
      </figure>
    </section>
  );
};

export default ServiceAudio;
