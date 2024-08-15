"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

export function Button({
  title,
  handleClick,
  containerStyle,
  rightIcon,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={`button`}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image alt="test " src={rightIcon} fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default Button;
