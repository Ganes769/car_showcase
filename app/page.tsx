import { CustomFilter, HeroSection } from "@/components";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import { CarProps, FilterProps } from "@/types";
import { fetchCats } from "@/utils/getcarData";
import Image from "next/image";
import { fuels, yearsOfProduction } from "../constants/constants";

export default async function Home({ searchParams }) {
  console.log(searchParams);
  const allCar = await fetchCats({
    manufacturer: searchParams.manufacturer || "bmw",
    fuel: searchParams.fuel,
    limit: searchParams.limit,
    model: searchParams.model || "m8",
    year: searchParams.year,
  });
  console.log(allCar);
  const isdataEmpty = allCar.length < 1;
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars You might like </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} /> */}
          </div>
        </div>
        {!isdataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCar.map((car: CarProps) => (
                <CarCard key={car.model} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2>Opps no cars </h2>
          </div>
        )}
      </div>
    </main>
  );
}
