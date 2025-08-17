"use client";

import React, { useEffect, useState } from "react";

import AddProductForm from "@/app/Admin/AddProductForm/page";
import Artvedic from "./Artvedic";
import { Drawer } from "vaul";
import Link from "next/link";
// import dynamic from "next/dynamic";
// import { useLocalStorageState } from "ahooks";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState("");
  const [active, setActive] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/session", { credentials: "include" });
      const data = await res.json();
      setAuth(data.authenticated); // true or false
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setAuth(false);
    router.refresh(); // Refresh layout to re-trigger server rendering
  };

  const handleClick = (page) => {
    setActive(page);
  };
  const handleMouseEnter = (page) => {
    setHovered(page);
  };
  const handleMouseLeave = () => {
    setHovered("");
  };
  return (
    <div className="flex justify-between items-center h-20 px-4 border-b border-gray-100">
      <Artvedic />
      <div className="text-black flex justify-between gap-8">
        <ul className="flex items-center gap-8 text-black">
          <Link href="/">
            <li
              onClick={() => handleClick("Home")}
              onMouseEnter={() => handleMouseEnter("Home")}
              onMouseLeave={() => handleMouseLeave()}
              className={`${hovered === "Home" ? "border-b-2" : ""} ${
                active === "Home" ? "border-b-2" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/About">
            <li
              onClick={() => handleClick("Rates")}
              onMouseEnter={() => handleMouseEnter("Rates")}
              onMouseLeave={() => handleMouseLeave()}
              className={`${hovered === "Rates" ? "border-b-2" : ""} ${
                active === "Rates" ? "border-b-2" : ""
              }`}
            >
              Rates
            </li>
          </Link>
          <a href="/Home">
            <li
              onClick={() => handleClick("commissions")}
              onMouseEnter={() => handleMouseEnter("commissions")}
              onMouseLeave={() => handleMouseLeave()}
              className={`${hovered === "commissions" ? "border-b-2" : ""} ${
                active === "commissions" ? "border-b-2" : ""
              }`}
            >
              Commissions
            </li>
          </a>
          <a href="/Learnings">
            <li
              onClick={() => handleClick("learnings")}
              onMouseEnter={() => handleMouseEnter("learnings")}
              onMouseLeave={() => handleMouseLeave("")}
              className={`${hovered === "learnings" ? "border-b-2" : ""} ${
                active === "learnings" ? "border-b-2 " : ""
              } `}
            >
              Learnings
            </li>
          </a>
        </ul>
        {!auth && (
          <button
            className="text-white bg-black px-8 py-1 rounded-md "
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        )}

        {auth && (
          <button
            className="text-white bg-black px-8 py-1 rounded-md "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {auth && (
          <button
            className="text-white bg-black px-8 py-1 rounded-md "
            onClick={() => router.push("/Admin/AddProductForm")}
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
