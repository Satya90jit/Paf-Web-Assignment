import Link from "next/link";
import MenuDrawer from "./MenuDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
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
        <ul className="flex flex-col sm:flex-row gap-7 text-md text-white ">
          <li>
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Live Sessions</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Video Series</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Ap Books</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Ap Articles</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Invite</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">In Media</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Careers</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="">Donate</p>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <MenuDrawer />
        </div>
      </div>
      <ResponsiveNavbar />
    </section>
  );
};

export default Navbar;
