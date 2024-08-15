import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-[16px] px-6 py-10 ">
        <div className="flex flex-col item-start justify-start mx-10 ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            className="object-contain"
            height={18}
          />
          <p className="text-base text-gray-700">
            Car Hub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="test-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flexflex-col justify-between items-center flex-wrap border-t mt-10 border-gray-100 sm:px-16 px-6 py-10">
        <p className="">@2024 CarHub</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-600">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-600">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
