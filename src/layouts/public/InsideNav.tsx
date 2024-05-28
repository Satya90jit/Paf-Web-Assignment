import { SearchBar } from "@/components/core";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

const InsideNav = ({
  insideNavClass,
}: {
  insideNavClass: string | undefined;
}) => {
  const [show, setShow] = useState(false);
  const controlCartBox = () => {
    if (window.scrollY > 110) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlCartBox);
    return () => {
      window.removeEventListener("scroll", controlCartBox);
    };
  }, []);

  return (
    <section
      className={`bg-white ${
        insideNavClass ? insideNavClass : ""
      } sticky top-0 w-full z-50 border-b py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
    >
      <section className="w-full flex justify-between items-center h-full main-container">
        <div className="flex items-center gap-4">
          <img src="/ic_videoseries.png" className="h-6" />
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`transition-all ease-in-out duration-500 cursor-pointer ${
              show ? "opacity-100 px-3" : "opacity-0"
            }`}
          >
            {show && <ShoppingCartOutlined className="" />}
          </div>
          <Search className="md:hidden" />
          <div className="bg-[#dd5228] rounded-lg px-4 py-2 h-fit text-white text-sm cursor-pointer whitespace-nowrap">
            My Video Series
          </div>
        </div>
      </section>
    </section>
  );
};

export default InsideNav;
