const CeoCustom = ({ title, text, header, name, job, textColor, fontSize }) => {
	return (
		<>
			<div className="w-full px-8 mx-auto max-w-7xl ">
				{header && (
					<p className="mb-3 text-sm font-semibold p-main uppercase">
						{header}
					</p>
				)}
				{title && <h2 className="mb-3 text-4xl font-bold">{title}</h2>}
				{text && (
					<p className="mb-3 " style={{ color: textColor, fontSize: fontSize }}>
						{text}
					</p>
				)}
				{name && <p className="mb-3 text-sm font-semibold p-main">{name}</p>}
				{job && <h2 className="mb-3 text-sm ">{job}</h2>}
			</div>
		</>
	);
};

export default CeoCustom;
