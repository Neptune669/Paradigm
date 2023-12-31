import React from "react";
import dot from "../assets/dot.svg";

// The ListItem component
const ListItem = ({ text }) => (
  <>
    {text && (
      <li className="text-base font-bold w-fit poppins-font">
        <img className="inline-block mr-2" src={dot} alt="" />
        {text}
      </li>
    )}
  </>
);

// Another styled ListItem component
const AnotherListItem = ({
  textHeader,
  text,
  secondTextHeader,
  secondText,
  thirdTextHeader,
  thirdText,
}) => (
  <>
    {textHeader && (
      <li className="font-bold poppins-font">
        <img className="inline-block mr-2 w-fit " src={dot} alt="" />
        {textHeader}
      </li>
    )}
    <li className="text-sm poppins-font lg:text-base">{text}</li>
    {secondTextHeader && (
      <li className="mt-4 font-bold poppins-font w-fit ">
        <img className="inline-block mr-2" src={dot} alt="" />
        {secondTextHeader}
      </li>
    )}
    <li className=" poppins-font w-fit">{secondText}</li>
    {thirdTextHeader && (
      <li className="mt-4 font-bold poppins-font">
        <img className="inline-block mr-2" src={dot} alt="" />
        {thirdTextHeader}
      </li>
    )}
    <li className=" poppins-font">{thirdText}</li>
  </>
);

const CustomSection = ({
  title,
  image,
  flexDirection,
  listItem,
  listStyle,
}) => {
  // Choose the ListItem component based on the listStyle prop
  const ListItemComponent =
    listStyle === "another" ? AnotherListItem : ListItem;

  return (
    <section
      className={`flex flex-col md:${flexDirection} justify-between gap-11 `}
    >
      <div className="flex flex-col gap-7 w-[38rem]">
        <h1 className="w-1/2 text-3xl font-bold lg:w-fit lg:text-4xl ">
          {title}
        </h1>
        <ul className="flex flex-col gap-2">
          {listItem.map((item, index) => (
            <ListItemComponent
              key={index}
              {...(typeof item === "string" ? { text: item } : item)}
            />
          ))}
        </ul>
      </div>
      <figure>
        <img src={image} alt="" />
      </figure>
    </section>
  );
};

export default CustomSection;
