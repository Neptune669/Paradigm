import CustomCard from "../componentws/customsuscard";

const SucCard = () => {
  const data = [
    {
      text: "Zero hunger",
      id: "2",
      description:
        "We partner with catering companies that embrace the value of low to zero waste in their practices, we also have agreements with our clients to distribute leftover food from Gallery’ catering while it is still fresh to maximize the use of food and reduce waste, trying to make a small contribution to battling food insecurity, food waste and hunger.",
    },
    {
      text: "Gender equality and women empowerment",
      description:
        "Paradigm is more than 50% women owned. We believe in providing equal opportunities without gender bias. Our team is gender balanced, with diverse team members from different academic and social backgrounds working together in an environment that is a safe space for everyone with equal career development opportunities. We also make sure to support women startups and initiatives by giving them priority when sourcing a lot of the hand-crafted products we use a lot in our line of business.",
      id: "5",
    },
    {
      text: "Responsible consumption and production",
      description:
        "For the past 7 years we have been promoting the use of recycled and recyclable products such as paper pens, recycled block notes, use of digital smart devices and promote paper free Gallery. We also optimize our wood production process by using upcycled and reusable modules for a more sustainable material utilization.",
      id: "12",
    },
    {
      text: "Climate action",
      description:
        "Hybrid and virtual Gallery are one of our areas of expertise. By advocating virtual event experiences, we participate the reduction of the carbon footprint allowing more participants to participate without traveling and commuting, which reduces the use of resources and contributes to climate action.",
      id: "13",
    },
    // {
    //   text: "Gender equality",
    //   id: "5",
    // },
    // {
    //   text: "Clean water and sanitation",
    //   id: "6",
    // },
    // {
    //   text: "Affordable and clean energy",
    //   id: "7",
    // },
    // {
    //   text: "Decent work and economic growth",
    //   id: "8",
    // },
    // {
    //   text: "Industry, innovation and infrastructure",
    //   id: "9",
    // },
    // {
    //   text: "Reduced inequalities",
    //   id: "10",
    // },
    // {
    //   text: "Sustainable cities and communities",
    //   id: "11",
    // },
    // {
    //   text: "Responsible consumption and production",
    //   id: "12",
    // },
    // {
    //   text: "Climate action",
    //   id: "13",
    // },
    // {
    //   text: "Life Below Water",
    //   id: "14",
    // },
    // {
    //   text: "Life on land",
    //   id: "15",
    // },
    // {
    //   text: "Peace, justice and strong institutions",
    //   id: "16",
    // },
    // {
    //   text: "Partnerships for the goals",
    //   id: "17",
    // },
  ];
  return (
    <>
      <div className="grid grid-cols-1 px-8 gap-x-3 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-16 lg:gap-x-6">
        {data.map((item, index) => (
          <CustomCard
            key={index}
            icon={`/icons/${item.id}.svg`}
            border={`b${item.id}`}
            text={item.text}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default SucCard;
