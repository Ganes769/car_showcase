import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  rightIcon?: string;
  disabled?: boolean;
}
export interface SearchProps {
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarDetailProps {
  isOpen: boolean;
  close: any;
  car: CarProps;
}
export interface FilterProps {
  manufacturer?: string;
  model?: string;
  fuel?: string;
  year?: number;
  limit?: number;
}
export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}
export interface OptionsProps {
  title: string;
  value: string;
}
