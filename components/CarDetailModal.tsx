/* eslint-disable react/jsx-key */
"use client";

import { CarDetailProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
const CarDetailModal = ({ car, isOpen, close }: CarDetailProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={close} as="div" className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full item-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative w-1/2 p-6 max-h-[90vh] overflow-y-hidden transform text-left shadow-xl flex flex-col gap-5 rounded-2xl bg-white">
                  <button
                    className="absolute right-2 top-3 w-fit bg-primary-blue-100 rounded-full"
                    onClick={close}
                    type="button"
                  >
                    <Image
                      width={20}
                      height={20}
                      className="object-contain"
                      src="/close.svg"
                      alt="test"
                    />
                  </button>
                  <div className="flex-1  mt-10 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-cover bg-center rounded-lg bg-pattern">
                      <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="hero"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="hero"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="hero"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-semibold capitalize">
                      {car.make}
                      {car.model}
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between gap w-full text-right">
                          <h4 className="text-gray capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetailModal;
