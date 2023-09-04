import React from "react";

const SectionWithImage = ({
  header,
  title,
  text,
  image,
  flexDirection,
  textColor,
}) => {
  const containerStyle = `flex items-center justify-between ${flexDirection}`;

  return (
    <div className={containerStyle}>
      <div className="">
        {header && <p className="text-xs p-main">{header}</p>}
        {title && <h2 className="text-4xl font-bold">{title}</h2>}
        {text && (
          <p className="max-w-md" style={{ color: textColor }}>
            {text}
          </p>
        )}
      </div>
      <div className="max-w-xl">
        {image && (
          <figure>
            <img src={image} alt="" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default SectionWithImage;
