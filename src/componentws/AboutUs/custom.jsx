const SectionWithImage = ({
  header,
  title,
  text,
  image,
  flexDirection,
  textColor,
  fontSize,
  name,
  job,
}) => {
  const containerStyle = `flex flex-col gap-10 items-center px-8 md:flex-row justify-between ${flexDirection}`;

  return (
    <div className={containerStyle}>
      <div className="">
        {header && <p className="mb-3 text-sm p-main">{header}</p>}
        {title && <h2 className="mb-3 text-4xl font-bold">{title}</h2>}
        {text && (
          <p
            className="max-w-md mb-3 "
            style={{ color: textColor, fontSize: fontSize }}
          >
            {text}
          </p>
        )}
        {name && <p className="mb-3 text-sm font-semibold p-main">{name}</p>}
        {job && <h2 className="mb-3 text-sm ">{job}</h2>}
      </div>
      <div className="max-w-md">
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
