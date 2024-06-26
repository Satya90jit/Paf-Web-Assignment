import { useAppContext } from "@/contexts";
import { ArrowDropDownOutlined, VolunteerActivism } from "@mui/icons-material";
import { Button, Collapse, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

export const MenuItems = [
  { title: "Home", path: "/" },
  { title: "Gita Samagam", path: "/live-sessions/gita" },
  {
    title: "Vedanta: Basics to Classics",
    path: "/live-sessions/vedanta-basics-to-classics",
  },
  { title: "Video Series", path: "/video-modules/series/course-series-eeb9d3" },
  { title: "Ap Books", path: "/books" },
  { title: "Ap Articles", path: "/articles" },
  { title: "For a Talk", path: "/invite/for-talks" },
  { title: "For an Interview", path: "/invite/for-Interview" },
  { title: "Media and Public Interactions ", path: "/media" },
  { title: "Contact Us", path: "/" },
  { title: "Careers", path: "/hiring" },
  { title: "Donate", path: "/contribute" },
];

const langArr = ["हिन्दी", "English"];
const ResponsiveNavbar = () => {
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [currentLangMenu, setCurrentLangMenu] = useState("");
  const { selectedLanguage, changeLanguage } = useAppContext();

  const handleLangClick = (event: any) => {
    setLangAnchorEl(event?.currentTarget);
    setCurrentLangMenu("language");
  };

  const handleClose = () => {
    setLangAnchorEl(null);
    setCurrentLangMenu("");
  };

  const handleLangSelect = (lang: any) => {
    changeLanguage?.(lang);
    handleClose();
  };
  const langOpen = Boolean(langAnchorEl);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleResNav = (path: any) => {
    router?.push(`${path}`);
    setOpen(false);
  };
  return (
    <section className="lg:hidden py-4 cursor-pointer bg-[#D24115] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="relative main-container h-full flex justify-between items-center">
        <Link href="/">
          <img
            src="/ic_favicon.png"
            alt="Logo"
            className="cursor-pointer w-8 h-8"
          />
        </Link>
        <div className="flex justify-center items-center gap-2">
          <div className="w-fit px-3 py-1 mr-3 rounded-lg text-white border text-md font-semibold flex items-center justify-center gap-2">
            <VolunteerActivism className="text-gray-200" />
            Donate
          </div>
          <Button
            className="text-white flex items-center capitalize"
            onClick={handleLangClick}
          >
            <p className="border border-white px-1 rounded-md w-8">
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
          <span onClick={() => setOpen(!open)} className="inline-block w-6">
            {open ? (
              <AiOutlineClose className="text-2xl text-white" />
            ) : (
              <BiMenuAltLeft className="text-3xl text-white" />
            )}
          </span>
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <article className="bg-[#D24115] w-full shadow-sm max-h-[90vh] overflow-y-scroll pb-6">
          <section className="main-container w-full flex flex-col font-medium pt-6">
            <div className="flex items-center gap-2 pb-6">
              <span className="h-12 w-12 rounded-full bg-gray-700 text-xl text-white p-2 flex justify-center items-center">
                S
              </span>
              <div className="flex items-start flex-col">
                <p className="text-lg text-white">Satyajit Sahu</p>
                <p className="text-gray-200 text-sm">
                  satyajitsahu1611@gmail.com
                </p>
              </div>
            </div>
            <hr />
            <div className="py-4">
              <ResponsiveCategoryList onClose={() => setOpen(false)} />
            </div>
            <hr />
            <div className="w-full py-6 text-white text-lg">
              {MenuItems?.slice(0, 11)?.map((item) => (
                <div
                  key={item?.title}
                  onClick={() => handleResNav(`${item?.path}`)}
                  className="hover:bg-orange-600/50 hover:text-orange-100 rounded-lg px-3 py-2 common-transition"
                >
                  {item?.title}
                </div>
              ))}
              <div
                onClick={() => router?.push(`/contribute`)}
                className="bg-[#FFEDD5] w-fit px-6 py-2 mt-2 rounded-lg text-[#D24115] text-lg font-semibold flex items-center justify-center gap-2"
              >
                <VolunteerActivism className="text-[#D24115]" />
                Donate
              </div>
            </div>
            <hr />
            <div className="w-full space-y-3 py-6 text-white text-lg">
              <p>About Acharya Prashant</p>
              <p>PrashantAdvait Foundation</p>
              <p>In Media</p>
              <p>Logout</p>
            </div>
            <div className="flex flex-row gap-3">
              <img
                src="/ic_appstore.png"
                className="h-[2.4rem]  border border-white shadow-md rounded-lg cursor-pointer"
              />
              <img
                src="/ic_googleplay.png"
                className="h-[2.4rem]  border border-white shadow-md rounded-lg cursor-pointer"
              />
            </div>
            <div className="space-y-4 pt-6">
              <div className="space-y-3">
                <h5 className="text-md text-gray-200">For English</h5>
                <div className="flex items-center gap-4 text-gray-200">
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaFacebookF className="text-xl hover:text-facebook hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaTwitter className="text-xl hover:text-twitter hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaInstagram className="text-xl hover:text-instagram hover:scale-110 common-transition" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/rohitkcjainandco"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedinIn className="text-xl hover:text-linkedin hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaYoutube className="text-xl hover:text-youtube hover:scale-110 common-transition" />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <h5 className="text-md text-gray-200">For Hindi</h5>
                <div className="flex items-center gap-4 text-gray-200">
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaFacebookF className="text-xl hover:text-facebook hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaTwitter className="text-xl hover:text-twitter hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaInstagram className="text-xl hover:text-instagram hover:scale-110 common-transition" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/rohitkcjainandco"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedinIn className="text-xl hover:text-linkedin hover:scale-110 common-transition" />
                  </a>
                  <a href="" target="_blank" rel="noreferrer noopener">
                    <FaYoutube className="text-xl hover:text-youtube hover:scale-110 common-transition" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Collapse>
    </section>
  );
};

const ResponsiveCategoryList = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState("");
  const DATA = [
    {
      domainId: "1",
      domainTitle: "MY ACCOUNT",
      subDomain: [
        {
          _id: "1",
          title: "My Video Series",
        },
        {
          _id: "2",
          title: "My eBooks",
        },
        {
          _id: "3",
          title: "Recorded Sessions",
        },
        {
          _id: "4",
          title: "My Cart",
        },
        {
          _id: "5",
          title: "My Donations",
        },
        {
          _id: "6",
          title: "My Orders",
        },
        {
          _id: "7",
          title: "Scholarship Requests",
        },
      ],
    },
    {
      domainId: "2",
      domainTitle: "MORE",
      subDomain: [
        {
          _id: "1",
          title: "PrashantAdvait Foundation",
        },
        {
          _id: "2",
          title: "Ghar Ghar Upanishad",
        },
        {
          _id: "3",
          title: "About Acharya Prashant",
        },
      ],
    },
    {
      domainId: "3",
      domainTitle: "EXPLORE CATEGORIES",
      subDomain: [
        {
          _id: "1",
          title: "Vedant - Upanishads",
        },
        {
          _id: "2",
          title: "Vedant - Bhagavad Gita",
        },
        {
          _id: "3",
          title: "Other Scriptures",
        },
        {
          _id: "4",
          title: "Saints and Masters",
        },
        {
          _id: "5",
          title: "Other Streams",
        },
        {
          _id: "6",
          title: "Life Questions",
        },
      ],
    },
  ];

  return (
    <>
      {DATA?.map((item: any) => (
        <div className="w-full" key={item?.domainId}>
          <div
            className={`flex items-center justify-between p-2 ${
              isOpen === item?.domainTitle
                ? "bg-white/5 text-white rounded-t-lg"
                : "text-gray-100"
            }`}
            onClick={() => {
              setIsOpen((prev) =>
                prev === item?.domainTitle ? "" : item?.domainTitle
              );
            }}
          >
            <p className="flex items-center tracking-wider">
              {item?.domainTitle}
            </p>
            {item?.subDomain ? (
              <MdExpandMore
                className={`text-xl common-transition ${
                  isOpen === item?.domainTitle ? "-rotate-180" : ""
                }`}
              />
            ) : (
              ""
            )}
          </div>

          <Collapse
            in={item?.domainTitle === isOpen}
            timeout="auto"
            unmountOnExit
          >
            <article className="bg-white/5 w-full flex flex-col shadow-sm pl-9 rounded-b-lg py-3 text-sm overflow-y-scroll">
              {item?.subDomain?.map((_: any, i: number) => (
                <p
                  className="flex items-center tracking-wider text-white py-2"
                  key={i}
                >
                  {_?.title}
                </p>
              ))}
            </article>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default ResponsiveNavbar;
