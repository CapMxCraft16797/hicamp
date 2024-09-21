"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 max-sm:flex-col ">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleVisiblity}
      />
      <ul
        //   to smoothe transition...need to continued
        className={`transition-transform  duration-500 ease-in-out 
          ${
            isVisible
              ? " flex-col gap-12 lg:flex-row"
              : " hidden h-full gap-12 lg:flex lg:flex-row "
          }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
