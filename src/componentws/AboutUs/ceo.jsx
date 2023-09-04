import SectionWithImage from "./custom";
import log from "../AboutUs/log.svg";
const ceo = () => {
  return (
    <SectionWithImage
      header="ceo word"
      title="Formula Of Success"
      text="For me, these are not just words to state at the beginning of a document, it’s rather a great opportunity to share with you the secret recipe of Paradigm.
        Since the beginning of our journey, our values and team are the corner stones of our success. For us, attitude is everything. Our team’s positive attitude reflects on our performance and the relationship we have with our clients.
        
        Focusing on integrity, honesty and commitment we ensure we deliver with satisfaction and beyond expectations.
        
        We care; hence we take care of every detail, because we love what we do, and we do what we love.
        
        “For one thing, there’s an essential human factor in every business endeavor. It doesn’t matter if you have a perfect product, production plan and marketing pitch; you’ll still need the right people to lead and implement those plans.”  - Bill Gates"
      image={log}
      flexDirection={"flex-row-reverse"}
    />
  );
};

export default ceo;
