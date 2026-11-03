import Icon from "../components/Icon.jsx";

const IconBox = ({ name }) => (
  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-md shadow-purple/30">
    <Icon name={name} />
  </div>
);

export default IconBox;
