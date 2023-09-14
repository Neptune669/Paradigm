const EventCard = ({ img, title, eventLink }) => {
  return (
    <li className="flex flex-col gap-10">
      <figure className="rounded-2xl lg:aspect-square">
        <img
          className="object-cover rounded-2xl aspect-square"
          src={img}
          alt=""
        />
      </figure>
      <div className="flex flex-col gap-1">
        <h2 className="mb-6 text-3xl font-medium uppercase">{title}</h2>
        <p className="text-base text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nihil laudantium, quasi suscipit expedita tempore totam sunt
          molestias, illum temporibus, minus nostrum nemo pariatur. Eveniet
        </p>
        <a href={eventLink} className="flex items-center gap-2">
          <span>View Event</span>
          <svg
            width="19"
            height="28"
            viewBox="0 0 19 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3125 14.4949H14.8125"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5625 9.2449L14.8125 14.4949L9.5625 19.7449"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </li>
  );
};

export default EventCard;
