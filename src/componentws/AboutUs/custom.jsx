const SectionWithImage = ({
  header,
  title,
  text,
  image,
  flexDirection,
  textColor,
  fontSize,
}) => {
  const containerStyle = `flex items-center justify-between ${flexDirection}`;

  return (
    <div className={containerStyle}>
      <div className="">
        {header && <p className="mb-3 text-sm p-main">{header}</p>}
        {title && <h2 className="mb-3 text-4xl font-bold">{title}</h2>}
        {text && (
          <p
            className="max-w-md"
            style={{ color: textColor, fontSize: fontSize }}
          >
            {text}
          </p>
        )}
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
