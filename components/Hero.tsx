"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
function handleScorll() {}
export default function HeroSection() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title">
          Find ,book or rent car quickly and easily
        </h2>
        <p className="hero__subtitle">
          Stramline your car rental experience with effortless booking process
        </p>
        <Button
          type="button"
          title="Explore cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScorll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
