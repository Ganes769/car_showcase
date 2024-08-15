"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import CarDetailModal from "./CarDetailModal";
interface CarCradProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCradProps) => {
  const [isOpen, setisOpen] = useState<boolean>();
  const { city_mpg, model, year, make, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 twxt-[32px] font-extrabold">
        <span className="self-start text-[14px]">${54}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 m-3 object-contain">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="text"
              height={20}
              width={20}
              src="/steering-wheel.svg"
            />
            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="text" height={20} width={20} src="  /tire.svg" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="text" height={20} width={20} src="/gas.svg" />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
            title="View more"
            containerStyle="text-white text-[14px] font-bold w-full py-[16px] rounded-full bg-primary-blue"
          />
        </div>
      </div>
      {isOpen && (
        <CarDetailModal
          isOpen={isOpen}
          close={() => setisOpen(false)}
          car={car}
        />
      )}
    </div>
  );
};

export default CarCard;
