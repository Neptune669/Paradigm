import dot from "../assets/dot.svg";
const CustomList = ({ listItem }) => (
  <ul className="flex flex-col gap-3">
    <li className="text-base font-bold poppins-font">
      <img className="inline-block mr-3" src={dot} alt="blue dot" />
      {listItem}
    </li>
  </ul>
);

export default CustomList;
