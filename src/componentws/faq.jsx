import MyDisclosure from "./faqCustom";
const Faq = () => {
  return (
    <>
      <section className="flex flex-col gap-20 mt-24 ">
        <h1 className="text-5xl font-bold text-center uppercase ">
          Frequently Asked <br /> Questions
        </h1>
        <MyDisclosure />
      </section>
    </>
  );
};

export default Faq;
