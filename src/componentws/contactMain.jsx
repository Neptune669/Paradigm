import fb from "../assets/fb2.svg";
import tw from "../assets/tweet2.svg";
import instgram from "../assets/instgram.svg";
import linked from "../assets/linked.svg";
import Form from "./form";
const ContactMain = () => {
  return (
    <>
      <main className="flex flex-col justify-between gap-8 py-16 lg:flex-row max-w-fit">
        <section className="flex min-w-fit flex-col gap-8 lg:border-r-2 lg:border-[#2F2F2F] ">
          <div className="">
            <ul className="flex flex-col gap-2 pr-4">
              <li className="text-3xl font-bold uppercase">
                More contact information
              </li>
              <li className="p-secondary">
                Lorem ipsum dolor sit amet consectetur id integer
                <br /> ipsum tristique tellus adipiscing ornare eget eu urna
                curabitur.
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2 ">
              <li className="uppercase p-secondary">Send us an email</li>
              <li className="text-lg uppercase">
                contact@paradigm-eg.com{" "}
                <svg
                  className="inline-block ml-6"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.822266 12.73L12.9903 0.490038L14.0163 1.51604L1.84827 13.738L0.822266 12.73ZM12.6483 12.784V1.91204H1.79427V0.472037H14.0883V12.784H12.6483Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="uppercase p-secondary">Give us a call</li>
              <li>
                (414) 248 - 8027
                <svg
                  className="inline-block ml-4"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.37207 12.73L12.5401 0.490038L13.5661 1.51604L1.39807 13.738L0.37207 12.73ZM12.1981 12.784V1.91204H1.34407V0.472037H13.6381V12.784H12.1981Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="border-t-2 pt-10 border-[#2F2F2F]">
            <ul className="flex flex-col gap-4 ">
              <li className="font-bold uppercase ">Follow us</li>
              <li className="p-secondary">
                Lorem ipsum dolor sit amet consectetur id integer ipsum.
              </li>
              <ul className="flex flex-row gap-6">
                <li>
                  <img src={fb} alt="" />
                </li>
                <li>
                  <img src={tw} alt="" />
                </li>
                <li>
                  <img src={instgram} alt="" />
                </li>
                <li>
                  <img src={linked} alt="" />
                </li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="mx-auto ">
          <Form />
        </section>
      </main>
    </>
  );
};

export default ContactMain;
