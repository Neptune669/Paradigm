import event from "../assets/event.png";
import hero from "../assets/event two.png";
import EventCard from "../componentws/customEventCard";
const images = [
  {
    img: event,
  },
  {
    img: hero,
  },
  {
    img: hero,
  },
  {
    img: event,
  },
  {
    img: event,
  },
  {
    img: hero,
  },
  {
    img: hero,
  },
  {
    img: event,
  },
];
const EventGallery = () => {
  return (
    <section>
      <div className="px-8 mx-auto max-w-7xl">
        <p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
          events
        </p>
        <div className="flex flex-col mb-16 md:flex-row md:justify-between md:items-center">
          <h2 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl lg:mb-10 lg:w-10/12">
            Our Events.
          </h2>
        </div>
        <ul className="grid gap-10 md:grid-cols-2">
          {images.map((item, index) => (
            <EventCard
              key={index}
              img={item.img}
              title="nchr egypt"
              eventLink="#"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventGallery;
