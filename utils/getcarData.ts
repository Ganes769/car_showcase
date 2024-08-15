import { manufacturers } from "@/constants/constants";
import { FilterProps } from "../types/index";
// const options = {
//   method: "GET",
//   url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
//   params: { model: "corolla" },
//   headers: {
//     "x-rapidapi-key": "0122f9a4f1mshd3e382dbc190857p1f8657jsn860e9273c396",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
export async function fetchCats(filterdata?: FilterProps) {
  const header = {
    "x-rapidapi-key": "0122f9a4f1mshd3e382dbc190857p1f8657jsn860e9273c396",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filterdata?.manufacturer}&models=${filterdata?.model}`,
    { headers: header }
  );
  const result = await response.json();
  return result;
}
