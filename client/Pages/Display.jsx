import ProductCarousel from "../components/Carousel";
import React from "react";
import { useSearch } from "../context/SearchContextProvider";

export default function Display() {
  const { data, error } = useSearch();
  return <div>{!error && <ProductCarousel data={data} error={error} />}</div>;
}
