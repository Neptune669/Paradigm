import SectionWithImage from "./custom";
import log from "../AboutUs/log.svg";
import CeoCustom from "./CeoCustom";
const CeoTwoSection = [
  {
    header: "ceo word",
    title: "the human experience",
    text: "For me, these are not just words to state at the beginning of a document, it’s rather a great opportunity to share with you the secret recipe of Paradigm. Since the beginning of our journey, our values and team are the corner stones of our success. For us, attitude is everything. Our team’s positive attitude reflects on our performance and the relationship we have with our clients.\n\nFocusing on integrity, honesty and commitment we ensure we deliver with satisfaction and beyond expectations.\n\nWe care; hence we take care of every detail, because we love what we do, and we do what we love.\n\n“For one thing, there’s an essential human factor in every business endeavor. It doesn’t matter if you have a perfect product, production plan and marketing pitch; you’ll still need the right people to lead and implement those plans.” - Bill Gates",
    image: log,
    textColor: "#505050",
    fontSize: "",
    flexDirection: "",
    name: "Mahmoud Amer",
    job: "CFO and Managing Director",
  },
];
const CeoTwo = () => {
  return (
    <div className="">
      {CeoTwoSection.map((item, index) => (
        <CeoCustom key={index} {...item} />
      ))}
    </div>
  );
};

export default CeoTwo;
