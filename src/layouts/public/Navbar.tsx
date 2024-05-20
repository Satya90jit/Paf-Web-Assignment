import { useAppContext } from "@/contexts";
import { ArrowDropDownOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

const NavMenuItems = [
  { title: "Home", path: "/" },
  {
    title: "Live Sessions",
    subMenu: [
      { title: "Gita Samagam", path: "/gita-samagam" },
      { title: "Vedanta: Basics to Classics", path: "/vedanta-basics" },
    ],
  },
  { title: "Video Series", path: "/video-series" },
  { title: "Ap Books", path: "/ap-books" },
  { title: "Ap Articles", path: "/ap-articles" },
  {
    title: "Invite",
    subMenu: [
      { title: "For a Talk", path: "/invite-talk" },
      { title: "For an Interview", path: "/invite-interview" },
    ],
  },
  { title: "In Media", path: "/in-media" },
  { title: "Careers", path: "/careers" },
  { title: "Donate", path: "/donate" },
];

const langArr = ["हिन्दी", "English"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [currentLangMenu, setCurrentLangMenu] = useState("");
  const router = useRouter();
  const { selectedLanguage, changeLanguage } = useAppContext();

  const handleClick = (event: any, menu: any) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleLangClick = (event: any) => {
    setLangAnchorEl(event.currentTarget);
    setCurrentLangMenu("language");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
    setLangAnchorEl(null);
    setCurrentLangMenu("");
  };

  const handleMenuClick = (path: any) => {
    // router.push(path);
    handleClose();
  };

  const handleLangSelect = (lang: any) => {
    changeLanguage?.(lang);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const langOpen = Boolean(langAnchorEl);
  return (
    <section className="bg-[#D24115] shadow-md w-full">
      <div className="main-container hidden lg:flex flex-row justify-between items-center w-full">
        <Link className="" href="/">
          <img
            src="/ic_favicon.png"
            alt="Logo"
            className="cursor-pointer h-10 py-1"
          />
        </Link>
        <ul className="flex flex-col sm:flex-row gap-4">
          {NavMenuItems?.map((item, index) => (
            <li key={index}>
              {item?.subMenu ? (
                <>
                  <Button
                    className="text-white flex items-center capitalize"
                    onClick={(e) => handleClick(e, item?.title)}
                  >
                    {item.title}
                    <ArrowDropDownOutlined
                      className={`transition-transform duration-200 ${
                        currentMenu === item.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open && currentMenu === item?.title}
                    onClose={handleClose}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        onClick={() => handleMenuClick(subItem?.path)}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button
                  className="text-white capitalize"
                  onClick={() => handleMenuClick(item?.path)}
                >
                  {item?.title}
                </Button>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center ">
          <Button
            className="text-white flex items-center capitalize"
            onClick={handleLangClick}
          >
            <p className="border border-white px-1 rounded-sm w-8">
              {selectedLanguage === "English" ? "EN" : "HI"}
            </p>
            <ArrowDropDownOutlined
              className={`transition-transform duration-200 ${
                currentLangMenu === "language" ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
          <Menu
            anchorEl={langAnchorEl}
            open={langOpen && currentLangMenu === "language"}
            onClose={handleClose}
          >
            {langArr.map((lang, index) => (
              <MenuItem key={index} onClick={() => handleLangSelect(lang)}>
                {lang}
              </MenuItem>
            ))}
          </Menu>
          <span className="pr-3 cursor-pointer hover:scale-110 common-transition">
            <LocalPhoneOutlined className="text-white" />
          </span>
          <div className="hidden lg:flex">
            <MenuDrawer />
          </div>
        </div>
      </div>
      <ResponsiveNavbar />
    </section>
  );
};

export default Navbar;
