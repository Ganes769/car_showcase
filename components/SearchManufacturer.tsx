/* eslint-disable react/jsx-key */
"use client";
import { SearchProps } from "@/types";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Button from "./Button";
import { manufacturers } from "@/constants/constants";
import Image from "next/image";
export default function SearchManufacturer({
  setmanufacturer,
  manufacturer,
}: SearchProps) {
  const [query, setquery] = useState("");
  const filtermanufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="img"
              height={20}
              width={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            onChange={(e) => setquery(e.target.value)}
            className="search-manufacturer__input"
            placeholder="search manufacturer"
            displayValue={(manufacturer: string) => manufacturer}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquery("")}
          >
            <Combobox.Options className="search-manufacturer__options">
              {filtermanufacturer.length === 0 && query === "" ? (
                <Combobox.Option
                  className="search-manufacturer__option"
                  value={query}
                >
                  Nothing found
                </Combobox.Option>
              ) : (
                filtermanufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
