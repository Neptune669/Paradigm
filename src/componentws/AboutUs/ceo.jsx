import SectionWithImage from "./custom";
import log from "../AboutUs/log.svg";
const Section = [
  {
    header: "ceo word",
    title: "Formula Of Success",
    text: "For me, these are not just words to state at the beginning of a document, it’s rather a great opportunity to share with you the secret recipe of Paradigm. Since the beginning of our journey, our values and team are the corner stones of our success. For us, attitude is everything. Our team’s positive attitude reflects on our performance and the relationship we have with our clients.\n\nFocusing on integrity, honesty and commitment we ensure we deliver with satisfaction and beyond expectations.\n\nWe care; hence we take care of every detail, because we love what we do, and we do what we love.\n\n“For one thing, there’s an essential human factor in every business endeavor. It doesn’t matter if you have a perfect product, production plan and marketing pitch; you’ll still need the right people to lead and implement those plans.” - Bill Gates",
    image: log,
    flexDirection: "md:flex-row-reverse",
    textColor: "#505050",
    fontSize: "18px",
    name: "Adham Badawi",
    job: "CEO",
  },
];
const ceo = () => {
  return (
    <div className="">
      {Section.map((item, index) => (
        <SectionWithImage key={index} {...item} />
      ))}
    </div>
  );
};

export default ceo;
