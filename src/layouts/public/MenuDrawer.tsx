import { Menu } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useState } from "react";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
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
        <article className="bg-white w-[30rem] shadow-sm cursor-pointer">
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
            <div className="w-full space-y-3 py-6 text-gray-600 text-sm">
              <p>Gita Samagam</p>
              <p>Vedanta: Basic to Classics</p>
              <p>AP Books</p>
              <p>AP Articles</p>
              <p>Video Series</p>
              <p>AP Circle</p>
              <p>Invite For Talk</p>
              <p>Invite For An Interview</p>
              <p>Media and Public Interaction</p>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Donate</p>
            </div>
            <hr />
            <div className="w-full space-y-3 py-6 text-gray-600 text-sm">
              <p>My Video Series</p>
              <p>My eBooks</p>
              <p>Recorded Sessions</p>
              <p>My Cart</p>
              <p>My Donations</p>
              <p>My Orders</p>
              <p>Scholarship Requests</p>
            </div>
            <hr />
            <div className="w-full space-y-3 py-6 text-gray-600 text-sm">
              <h1 className="text-gray-800 font-semibold">MORE</h1>
              <p>PrashantAdvait Foundation</p>
              <p>Ghar Ghar Upanishad</p>
              <p>About Acharya Prashant</p>
            </div>
            <hr />
            <div className="space-y-3 py-6 text-gray-600 text-sm">
              <h1 className="text-gray-800 font-semibold">
                EXPLORE CATEGORIES
              </h1>
              <p>Vedant - Upanishads</p>
              <p>Vedant - Bhagavad Gita</p>
              <p>Other Scriptures</p>
              <p>Saints and Masters</p>
              <p>Other Streams</p>
              <p>Life Questions</p>
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
