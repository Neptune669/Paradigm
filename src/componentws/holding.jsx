const Holding = () => {
  return (
    <div className="flex flex-col justify-between px-8 mx-auto max-w-7xl md:flex-row">
      <div className="">
        <div className="lg:w-[40rem] w-80 lg:h-[43rem] flex flex-col gap-4 ">
          <div className="text-sm font-semibold leading-none uppercase text-main ">
            our group
          </div>
          <div className="text-5xl font-medium text-white ">
            Paradigm Holding
          </div>
          <div className="text-sm font-normal text-white opacity-50 md:text-lg min-w-fit">
            Recognizing the increase in business demand, along with the fact
            that most of our clients are mainly international organizations, the
            urge to make ourselves available in multiple destinations to cover
            the MENA region increased. Our UAE and KSA branches were the first
            steps in our regional expansion plan and our intention to embrace
            cultural diversity to the fullest of our capacity.
            <br />
            <br />
            Working hand in hand with the support of our trusted partners, we
            wanted to ensure that our key event services are being secured in
            terms of availability, reliability and standards of delivery,
            getting us closer to having a 100% in-house operation and achieving
            our vision with every passing day.
            <br />
            <br />
            Our group of companies include Paradigm Events Emirates, Paradigm
            Events Saudi Arabia, Paradigm Events Egypt, Top Rent Audio Visual
            Solutions, Paradigm for Transportation & Logistical Support, and P
            Plus Media Production Studios. Operating under the umbrella of
            Paradigm Holding Dubai provided us with strong presence and smoother
            logistical operation in the MENA region.
          </div>
          <div className="inline-flex items-center justify-start gap-2 ">
            <div className="text-white text-base font-medium font-['Inter'] leading-normal">
              Learn more &rarr;
            </div>
            <div className="relative w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex-col items-center hidden lg:flex md:flex-row md:flex ">
        <div className="w-[664px] h-[643px] relative">
          <div className=" left-[133px] top-[151px] absolute">
            <div className="w-[188.59px] h-[201px] left-0 top-0 absolute">
              <img
                className="w-[136px] h-[124px] left-[25.97px] top-[39px] absolute"
                src="/logo.svg"
              />
            </div>
            <div className="w-[188.59px] h-[201px] left-0 top-[221px] absolute">
              <div className="w-[188.59px] h-[201px] left-0 top-0 absolute">
                <img
                  className="w-[136px] h-[124px] left-[26px] top-[39px] absolute"
                  src="/logo.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[188.59px] h-[643px] left-[341.59px] top-[40px] absolute">
            <div className="w-[188.59px] h-[201px] left-0 top-0 absolute">
              <img
                className="w-[136px] h-[124px] left-[25.97px] top-[39px] absolute"
                src="/logo.svg"
              />
            </div>
            <div className="w-[188.59px] h-[201px] left-0 top-[221px] absolute">
              <div className="w-[188.59px] h-[201px] left-0 top-0 absolute">
                <img
                  className="w-[136px] h-[124px] left-[26px] top-[39px] absolute"
                  src="/logo.svg"
                />
              </div>
            </div>
            <div className="w-[188.59px] h-[201px] left-0 top-[442px] absolute">
              <div className="w-[188.59px] h-[201px] left-0 top-0 absolute">
                <img
                  className="w-28 h-20 left-[38px] top-[61px] absolute"
                  src="/logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holding;
