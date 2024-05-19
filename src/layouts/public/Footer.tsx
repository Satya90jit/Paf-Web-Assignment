import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";

const MoreArr = [
  { id: 1, title: "About Acharya Prashant" },
  { id: 2, title: "Invite Him" },
  { id: 3, title: "Interview Him" },
  { id: 4, title: "Ghar Ghar Upanishad" },
  { id: 5, title: "Media and Public Interaction" },
];

const WisdomArr = [
  { id: 1, title: "Video Series" },
  { id: 2, title: "AP Books" },
  { id: 3, title: "AP Articles" },
  { id: 4, title: "AP Circle" },
];

const LiveEvents = [
  { id: 1, title: "Gita Samagam" },
  { id: 2, title: "Vedanta: Basics to Classics" },
];

const Footer = () => {
  return (
    <section className="bg-[#0A1121] overflow-hidden md:pb-8 pb-4">
      <aside className="py-12 main-container">
        {/* footer grid part  */}
        <aside className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 w-full">
          {/* Live Events  */}
          <div>
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white pb-5">
              LIVE EVENTS
            </h4>
            <div className="flex flex-col gap-2">
              {LiveEvents?.map((item: any) => {
                return (
                  <div key={item?.id}>
                    <div className="flex flex-row items-center gap-1 hover:text-[#e76250] cursor-pointer transition-all ease-in-out duration-75 text-slate-400 capitalize">
                      <p className="common-transition">{item?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* WISDOM CONTENT */}
          <div>
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white pb-5">
              WISDOM CONTENT
            </h4>
            <div className="flex flex-col gap-2">
              {WisdomArr?.map((item: any) => {
                return (
                  <div key={item?.id}>
                    <div className="flex flex-row items-center gap-1 hover:text-[#e76250] cursor-pointer transition-all ease-in-out duration-75 text-slate-400 capitalize">
                      <p className="common-transition">{item?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* more  */}
          <div>
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white pb-5">
              MORE
            </h4>
            <div className="flex flex-col gap-2">
              {MoreArr?.map((item: any) => {
                return (
                  <div key={item?.id}>
                    <div className="flex flex-row items-center gap-1 hover:text-[#e76250] cursor-pointer transition-all ease-in-out duration-75 text-slate-400 capitalize">
                      <p className="common-transition">{item?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Social media   */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white">
              SOCIAL MEDIA
            </h4>
            <div className="space-y-3">
              <h5 className="text-md text-gray-200">For English</h5>
              <div className="flex items-center gap-3 text-gray-200">
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaFacebookF className="text-xl hover:text-facebook hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaTwitter className="text-xl hover:text-twitter hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaInstagram className="text-xl hover:text-instagram hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaLinkedinIn className="text-xl hover:text-linkedin hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaYoutube className="text-xl hover:text-youtube hover:scale-110 common-transition" />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text-md text-gray-200">For Hindi</h5>
              <div className="flex items-center gap-3 text-gray-200">
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaFacebookF className="text-xl hover:text-facebook hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaTwitter className="text-xl hover:text-twitter hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaInstagram className="text-xl hover:text-instagram hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaLinkedinIn className="text-xl hover:text-linkedin hover:scale-110 common-transition" />
                </a>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <FaYoutube className="text-xl hover:text-youtube hover:scale-110 common-transition" />
                </a>
              </div>
            </div>
          </div>
          {/* download app */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white">
              DOWNLOAD APP
            </h4>
            <div className="flex items-center gap-2">
              <img src="/ic_favicon.png" className="min-w-8 w-5" />
              <p className="text-white">Acharya Prashant</p>
            </div>
            <img
              src="/ic_appstore.png"
              className="h-[2.4rem] w-[8rem] border border-white shadow-md rounded-lg cursor-pointer"
            />
            <img
              src="/ic_googleplay.png"
              className="h-[2.4rem] w-[8rem] border border-white shadow-md rounded-lg cursor-pointer"
            />
          </div>
          {/* contact us */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg tracking-wide capitalize text-white">
              CONTACT US
            </h4>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white">
                <MdOutlineMail />
              </div>
              <a
                href="mailto:support@advait.org.in"
                className="flex flex-col gap-1 text-white"
              >
                <span className=" text-slate-400 ">support@advait.org.in</span>
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white">
                <MdOutlineWhatsapp />
              </div>
              <a
                href="tel:+91-9650585100"
                className="flex flex-col gap-1 text-white"
              >
                <span className=" text-slate-400 ">+91-9650585100</span>
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white">
                <FiPhoneCall />
              </div>
              <a
                href="tel:+91-9650585100"
                className="flex flex-col gap-1 text-white"
              >
                <span className=" text-slate-400 ">+91-9650585100</span>
              </a>
            </div>
          </div>
        </aside>
      </aside>
      {/* Copy Right Reserve part */}
      <section className="">
        <hr className="mx-auto lg:w-[70%] w-[90%]" />
        <aside className="w-full flex justify-center items-center">
          <div className="lg:w-[50%] w-full px-3 flex lg:flex-row flex-col gap-4 py-5 items-center justify-between">
            <p className="text-center text-gray-300">
              {new Date().getFullYear()} Copyright © 2022 PrashantAdvait
              Foundation
            </p>
            <p className="text-white hover:underline text-center">
              Terms & Conditions | Privacy Policy | Undertaking
            </p>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Footer;
