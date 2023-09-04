import back from "../AboutUs/back.svg";

import SectionWithImage from "./custom";
const Who = () => {
  return (
    <div className="px-8 mx-auto max-w-7xl">
      {/* <div className="flex items-center justify-between">
        <div className="">
          <p className="text-xs p-main">Who We Are</p>
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="max-w-md text-neutral-500">
            Guided by 15 years of Scouts values, followed by professional
            academic training between Egypt and the UK over a span of 3 years
            under the Young Leaders programme, a collaboration between the
            British Council in Egypt & the UK, and the UK Ministry of Youth &
            Sports. <br />
            <br /> Our group of founders graduated the Events Managers Training
            programme followed by TOT for Events Managers, which paved the way
            to form the Paradigm vision.
          </p>
        </div>
        <div className="max-w-2xl">
          <figure>
            <img src={back} alt="" />
          </figure>
        </div>
      </div> */}
      <SectionWithImage
        header="Who We Are"
        title="Our Story"
        text="Guided by 15 years of Scouts values, followed by professional academic training between Egypt and the UK over a span of 3 years under the Young Leaders programme, a collaboration between the British Council in Egypt & the UK, and the UK Ministry of Youth & Sports. Our group of founders graduated the Events Managers Training programme followed by TOT for Events Managers, which paved the way to form the Paradigm vision."
        image={back}
        textColor="#FFFFFF"
      />
    </div>
  );
};

export default Who;
