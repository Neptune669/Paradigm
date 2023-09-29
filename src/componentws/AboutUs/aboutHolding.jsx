import EgyptLogo from "../AboutUs/EgyptLogo.svg";
import suadiLogo from "../AboutUs/suadiLogo.svg";
import emLogo from "../AboutUs/emLogo.svg";
import studio from "../AboutUs/studio.svg";
import trans from "../AboutUs/trans.svg";
import HoldingCard from "../AboutUs/holdingCard";
const HoldingData = [
  {
    logo: EgyptLogo,
    description:
      "With over 12 years of experience and over 2500 successfully completed events. Paradigm Egypt is a market leader in event management, actively collaborating with the majority of UN agencies, multiple international and governmental organizations, in addition to an outstanding portfolio of corporate and high-level events.",
  },
  {
    logo: suadiLogo,
    description:
      "With over 12 years of experience and over 2500 successfully completed events. Paradigm Egypt is a market leader in event management, actively collaborating with the majority of UN agencies, multiple international and governmental organizations, in addition to an outstanding portfolio of corporate and high-level events.",
  },
  {
    logo: emLogo,
    description:
      "With over 12 years of experience and over 2500 successfully completed events. Paradigm Egypt is a market leader in event management, actively collaborating with the majority of UN agencies, multiple international and governmental organizations, in addition to an outstanding portfolio of corporate and high-level events.",
  },
  {
    logo: studio,
    description:
      "With over 12 years of experience and over 2500 successfully completed events. Paradigm Egypt is a market leader in event management, actively collaborating with the majority of UN agencies, multiple international and governmental organizations, in addition to an outstanding portfolio of corporate and high-level events.",
  },
  {
    logo: trans,
    description:
      "With over 12 years of experience and over 2500 successfully completed events. Paradigm Egypt is a market leader in event management, actively collaborating with the majority of UN agencies, multiple international and governmental organizations, in addition to an outstanding portfolio of corporate and high-level events.",
  },
];
const AboutHolding = () => {
  return (
    <main>
      <p className="mb-3 text-sm font-semibold p-main">our group</p>
      <h2 className="mb-3 text-5xl font-bold">Paradigm Holding</h2>
      <section className="grid grid-cols-2 gap-x-5 gap-y-4">
        {HoldingData.map((data, index) => (
          <HoldingCard
            key={index}
            logo={data.logo}
            description={data.description}
          />
        ))}
      </section>
    </main>
  );
};

export default AboutHolding;
