import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const MobileLinks = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/posts" },
    { name: "Write", link: "/write" },
    { name: "Bookmarks", link: "bookmarks" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className="w-full h-16 border-b-2 border-black 2xl:border-none bg-neutral-100 flex items-center justify-between md:sticky top-0 z-20">
      {/*MOBILE MENU LOGO */}
      <div
        className="w-7 md:hidden cursor-pointer text-3xl ml-3"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "ⓧ" : "☰"}
      </div>

      {/* BLOGNEST LOGO */}
      <Link
        to="/"
        className="flex items-center gap-1 text-xl mobile:text-2xl font-bold font-mono"
      >
        <img
          className="rounded-3xl w-8 md:ml-9 tab:w-10"
          src="/logo.jpg"
          alt="Logo"
        />
        <span>BlogNest</span>
      </Link>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex w-full items-center justify-end mr-10 gap-6 tab:gap-10 text-base font-medium">
        {MobileLinks.map((link) => (
          <NavLink
            to={link.link}
            className={({ isActive }) =>
              `px-2 py-1 rounded active:scale-95 hover:text-gray-800 hover:bg-gray-100 ${
                isActive ? " border bg-slate-100 text-gray-800" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <SignedOut>
          <NavLink to="login">
            <button className="bg-gray-500 text-white px-4 py-2 tab:mr-2 tab:ml-6 rounded-md transition hover:bg-gray-600 active:scale-95">
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden z-10 flex">
        {/* LOGIN BUTTON */}
        <div className="mr-3 mt-2">
          <SignedOut>
            <NavLink to="login">
              <button className="bg-gray-500 text-white mb-1.5 px-3 py-2 rounded-md text-sm transition hover:bg-gray-600 active:scale-95">
                Login
              </button>
            </NavLink>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full flex flex-col justify-center items-center h-full absolute top-16 right-0 gap-8 text-lg bg-neutral-50 transition-all duration-200 ease-in-out transform ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
          onClick={() => setOpen(!open)}
        >
          {MobileLinks.map((link) => (
            <NavLink to={link.link} className="active:underline">
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
