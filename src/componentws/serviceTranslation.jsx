import dot from "../assets/dot.svg";
const data = [
  {
    text: "Interpretation Booths (Single & Multiple)",
  },
  {
    text: "IR Transmission Interpretation Systems",
  },
  {
    text: "Touch Registration & Info Monitors",
  },
  {
    text: "Multichannel IR Headsets",
  },
  {
    text: "Simultaneous Interpretation Solutions.",
  },
  {
    text: "Consecutive Interpretation Solutions.",
  },
  {
    text: "Remote simultaneous interpretation (RSI)",
  },
  {
    text: "Wireless Digital Tour Guide System.",
  },
  {
    text: "Certified Multilingual Interpreters",
  },
  {
    text: "Documents Translation Services",
  },
];
const ServiceTranslation = ({ image, flexDirection }) => {
  return (
    <section className={`flex ${flexDirection} justify-between gap-11`}>
      {" "}
      <div className="flex flex-col gap-7 w-[38rem]">
        <h1 className="text-5xl font-bold ">
          Interpretation & <br /> Translation Services
        </h1>
        <ul className="flex flex-col gap-5 ">
          {data.map((item, index) => (
            <li key={index} className="text-base font-bold poppins-font">
              <img className="inline-block" src={dot} alt={item} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img src={image} alt="Interpretation & Translation Services" />
      </figure>
    </section>
  );
};

export default ServiceTranslation;
