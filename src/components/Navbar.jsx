import { LogIn } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import MyLink from "./MyLink";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("signout sucessful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="navbar bg-[#FFF7E8] border-b border-[#FDE6C8] shadow-sm py-4 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown text-amber-800">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/toy">Toy</MyLink>
            </li>
            <li>
              <MyLink to="/profile">Profile</MyLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link className="flex items-center justify-center gap-1" to={"/"}>
            <h1 className="font-bold text-2xl text-[#3A3A3A]">ToyTopia</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-8 hidden lg:flex">
          <li>
            <MyLink to="/" className={"font-semibold"}>
              Home
            </MyLink>
          </li>
          <li>
            <MyLink to="/toy" className={"font-semibold"}>
              Toy
            </MyLink>
          </li>

          <li>
            <MyLink to="/profile" className={"font-semibold"}>
              Profile
            </MyLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="flex flex-col items-center space-y-2">
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : user ? (
          <div className="relative text-center space-y-3">
            <button className="btn" onClick={() => setOpen(!open)}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10 w-10 rounded-full mx-auto"
                alt=""
              />
            </button>
            {open && (
              <div
                className="absolute right-0 mt-3 w-35 rounded-xl bg-[#FFFDF8] shadow-lg border border-amber-200 p-3 flex flex-col gap-2 z-50"
              >
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="bg-white border border-amber-400 text-amber-600 hover:bg-amber-50 py-2 rounded-lg font-semibold text-center"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    handleSignout();
                    setOpen(false);
                  }}
                  className=" bg-white border border-amber-400 text-amber-600 hover:bg-amber-50 py-2 rounded-lg font-semibold shadow-sm "
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-semibold flex gap-1 items-center"
          >
            <LogIn className="w-5" />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
