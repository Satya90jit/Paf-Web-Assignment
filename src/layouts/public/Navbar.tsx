import { useAppContext } from "@/contexts";
import { RootState } from "@/store";
import { changeLanguage } from "@/store/languageSlice";
import { ArrowDropDownOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuDrawer from "./MenuDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

const NavMenuItems = [
  { title: "Home", path: "/" },
  {
    title: "Live Sessions",
    subMenu: [
      { title: "Gita Samagam", path: "/live-sessions/gita" },
      {
        title: "Vedanta: Basics to Classics",
        path: "/live-sessions/vedanta-basics-to-classics",
      },
    ],
  },
  { title: "Video Series", path: "/video-modules/series/course-series-eeb9d3" },
  { title: "Ap Books", path: "/books" },
  { title: "Ap Articles", path: "/articles" },
  {
    title: "Invite",
    subMenu: [
      { title: "For a Talk", path: "/invite/for-talks" },
      { title: "For an Interview", path: "/invite/for-Interview" },
    ],
  },
  { title: "In Media", path: "/media" },
  { title: "Careers", path: "/hiring" },
  { title: "Donate", path: "/contribute" },
];

const langArr = ["हिन्दी", "English"];

const Navbar = ({ navClass }: { navClass: string | undefined }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [currentLangMenu, setCurrentLangMenu] = useState("");
  const router = useRouter();
  //! use of context API
  // const { selectedLanguage, changeLanguage } = useAppContext();
  //! use of redux toolkit
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );

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
    router.push(path);
    handleClose();
  };

  //! use of context API
  // const handleLangSelect = (lang: any) => {
  //   changeLanguage?.(lang);
  //   handleClose();
  // };
  //! use of redux toolkit
  const handleLangSelect = (lang: any) => {
    dispatch(changeLanguage(lang));
    handleClose();
  };

  const open = Boolean(anchorEl);
  const langOpen = Boolean(langAnchorEl);
  return (
    <nav
      className={`bg-[#D24115] shadow-md  ${navClass ? navClass : "w-[100%]"}`}
    >
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
                    className="mt-1"
                    anchorEl={anchorEl}
                    open={open && currentMenu === item?.title}
                    onClose={handleClose}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem
                        className="hover:bg-orange-300/30  hover:text-orange-700 font-medium common-transition mx-2 rounded-md"
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
                  className="text-white capitalize hover:bg-orange-700  common-transition"
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
    </nav>
  );
};

export default Navbar;
