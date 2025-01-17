import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4">
        <Link href="/" className="flex justify-center items-baseline">
          <Image
            className="object-contain"
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
          />
        </Link>
        <Button
          type="button"
          title="SignIn"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
