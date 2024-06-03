import { Menu } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuItems } from "./ResponsiveNavbar";

const OtherItems = [
  { title: "My Video Series", path: "/videos" },
  { title: "My eBooks", path: "/ebooks" },
  { title: "Recorded Sessions", path: "/sessions" },
  { title: "My Cart", path: "/cart" },
  { title: "My Donations", path: "/donations" },
  { title: "My Orders", path: "/orders" },
  { title: "Scholarship Requests", path: "/scholarships" },
];

const MoreItems = [
  { title: "PrashantAdvait Foundation", path: "/prashantadvait" },
  { title: "Ghar Ghar Upanishad", path: "/ghargharupanishad" },
  { title: "About Acharya Prashant", path: "/aboutacharyaprashant" },
];

const CategoryItems = [
  { title: "Vedant - Upanishads", path: "/vedant-upanishads" },
  { title: "Vedant - Bhagavad Gita", path: "/vedant-bhagavad-gita" },
  { title: "Other Scriptures", path: "/other-scriptures" },
  { title: "Saints and Masters", path: "/saints-masters" },
  { title: "Other Streams", path: "/other-streams" },
  { title: "Life Questions", path: "/life-questions" },
];

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItem = (path: any) => {
    setOpen(false);
    router?.push(`${path}`);
  };

  return (
    <section className="py-3">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex gap-1 items-center cursor-pointer text-white"
      >
        <Menu />
        <span className="text-sm">Menu</span>
      </div>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor={"right"}
        BackdropProps={{
          className: "bg-gray-800 bg-opacity-50",
        }}
        transitionDuration={500}
      >
        <article className="bg-white w-[25rem] shadow-sm cursor-pointer">
          <section className="main-container w-full flex flex-col pt-4 font-medium">
            <div className="flex items-center gap-2 pb-6">
              <span className="h-12 w-12 rounded-full bg-gray-700 text-xl text-white p-2 flex justify-center items-center">
                S
              </span>
              <div className="flex items-start flex-col">
                <p className="text-lg text-gray-700">Satyajit Sahu</p>
                <p className="text-gray-600 text-sm">
                  satyajitsahu1611@gmail.com
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col w-full py-6 text-gray-600 text-sm">
              {MenuItems?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => handleMenuItem(`${item?.path}`)}
                  className="hover:bg-orange-200/50 hover:text-orange-700 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <hr />
            <div className="flex flex-col w-full py-6 text-gray-600 text-sm">
              {OtherItems?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => handleMenuItem(`${item?.path}`)}
                  className="hover:bg-orange-200/50 hover:text-orange-700 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <hr />
            <div className="w-full py-6 text-gray-600 text-sm">
              <h1 className="text-gray-800 font-semibold px-3 pb-2">MORE</h1>
              {MoreItems?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => handleMenuItem(`${item?.path}`)}
                  className="hover:bg-orange-200/50 hover:text-orange-700 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <hr />
            <div className="py-6 text-gray-600 text-sm">
              <h1 className="text-gray-800 font-semibold px-3 pb-2">
                EXPLORE CATEGORIES
              </h1>
              {CategoryItems?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => handleMenuItem(`${item?.path}`)}
                  className="hover:bg-orange-200/50 hover:text-orange-700 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
            </div>
          </section>
          <div className="bottom-0 w-full">
            <div className="w-full bg-gray-300 hover:bg-gray-400/60 common-transition h-10 flex justify-center items-center text-orange-700 capitalize text-md font-semibold">
              <p>logout</p>
            </div>
          </div>
        </article>
      </Drawer>
    </section>
  );
};

export default MenuDrawer;
