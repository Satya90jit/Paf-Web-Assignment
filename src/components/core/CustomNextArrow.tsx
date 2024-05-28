import { FaArrowRight } from "react-icons/fa";

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 -right-4 z-10 p-2 bg-orange-600/50 text-white rounded-full hover:bg-gray-800 common-transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white`}
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  );
};

export default CustomNextArrow;
