import placeholder from "../assets/placeholder.png";
import fb from "../assets/fb.svg";
import pin from "../assets/pin.svg";
import tweet from "../assets/tweet.svg";
import mail from "../assets/mail.svg";
const ArticleContent = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="">
        <figure>
          <img src={placeholder} alt="" />
        </figure>
      </div>
      <div className="">
        <h2 className="text-6xl">
          New collection launches — a collaboration between two great designers
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <p>march,2021</p>
        <ul className="flex gap-3">
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={pin} alt="" />
          </li>
          <li>
            <img src={tweet} alt="" />
          </li>
          <li>
            <img src={mail} alt="" />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#C0C0C0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse
          obcaecati est repellat assumenda deleniti rem impedit dolorum, non aut
          nobis reiciendis ducimus dolor consequatur sint velit fugit alias
          eveniet. Beatae sit dolorem quaerat perferendis tempore, culpa
          architecto quae nulla possimus ipsum placeat debitis nemo rem
          voluptates necessitatibus eum soluta pariatur voluptatum. Iste amet
          numquam nobis minus eligendi quasi eos. Quis ullam enim, ipsa aut
          saepe perferendis delectus iste commodi ducimus quibusdam nesciunt ex
          tempora autem amet accusamus odit iure fugit necessitatibus ratione
          consectetur sequi. Corporis optio ut aliquid laborum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab esse obcaecati est
          repellat assumenda deleniti rem impedit dolorum, non aut nobis
          reiciendis ducimus dolor consequatur sint velit fugit alias eveniet.
          Beatae sit dolorem quaerat perferendis tempore, culpa architecto quae
          nulla possimus ipsum placeat debitis nemo rem voluptates
          necessitatibus eum soluta pariatur voluptatum. Iste amet numquam nobis
          minus eligendi quasi eos. Quis ullam enim, ipsa aut saepe perferendis
          delectus iste commodi ducimus quibusdam nesciunt ex tempora autem amet
          accusamus odit iure fugit necessitatibus ratione consectetur sequi.
          Corporis optio ut aliquid laborum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab esse obcaecati est repellat assumenda
          deleniti rem impedit dolorum, non aut nobis reiciendis ducimus dolor
          consequatur sint velit fugit alias eveniet. Beatae sit dolorem quaerat
          perferendis tempore, culpa architecto quae nulla possimus ipsum
          placeat debitis nemo rem voluptates necessitatibus eum soluta pariatur
          voluptatum. Iste amet numquam nobis minus eligendi quasi eos. Quis
          ullam enim, ipsa aut saepe perferendis delectus iste commodi ducimus
          quibusdam nesciunt ex tempora autem amet accusamus odit iure fugit
          necessitatibus ratione consectetur sequi. Corporis optio ut aliquid
          laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          esse obcaecati est repellat assumenda deleniti rem impedit dolorum,
          non aut nobis reiciendis ducimus dolor consequatur sint velit fugit
          alias eveniet. Beatae sit dolorem quaerat perferendis tempore, culpa
          architecto quae nulla possimus ipsum placeat debitis nemo rem
          voluptates necessitatibus eum soluta pariatur voluptatum. Iste amet
          numquam nobis minus eligendi quasi eos. Quis ullam enim, ipsa aut
          saepe perferendis delectus iste commodi ducimus quibusdam nesciunt ex
          tempora autem amet accusamus odit iure fugit necessitatibus ratione
          consectetur sequi. Corporis optio ut aliquid laborum.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eaque! Rerum repellat perspiciatis vero voluptate labore, fugiat
          officia porro eum accusantium modi deserunt quod laboriosam,
          exercitationem atque delectus illum sunt.
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
