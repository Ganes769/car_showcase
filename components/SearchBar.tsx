"use client";
import { useState } from "react";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";
function SearchBar() {
  const router = useRouter();
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setmodel] = useState("");
  console.log(manufacturer, model);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model == "") return;
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (modal: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const pathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(pathname);
  };
  return (
    <form className="searchbar m-4  " onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
        <SearchButton other="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          height={25}
          width={25}
          alt="test"
          className="absolute h-[20px] w-[20px] ml-3"
        />
        <input
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="name"
          className="searchbar__input"
          type="text"
          name="model"
        />
        <SearchButton other="sm:hidden" />
      </div>
      <SearchButton other="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
const SearchButton = ({ other }: { other: string }) => {
  return (
    <button className={`ml-3 z-10 ${other}`}>
      <Image
        alt="test"
        src="/magnifying-glass.svg"
        height={40}
        width={40}
        className="object-contain"
      />
    </button>
  );
};
