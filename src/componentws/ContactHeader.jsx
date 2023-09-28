import CustomHeader from "./customHeader";

const ContactHeader = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-3 mt-16 lg:flex-row">
        <div className="w-[100rem]">
          <CustomHeader>
            Let’s work <br />
            together
          </CustomHeader>
        </div>
        <p className="self-end text-[#C0C0C0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora
          voluptates saepe deleniti dolorum nostrum veritatis molestias
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
