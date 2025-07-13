import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (country) {
      fetchCountriesFromApi();
    } else {
      fetchCountriesFromLocalStorage();
    }
  }, [country]);

  const fetchCountriesFromApi = async () => {
    const url = country
      ? `https://restcountries.com/v3.1/name/${country}`
      : "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital";
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (country) {
        setCountries(data[0]);
      } else {
        setCountries(data);
        setFilteredCountries(data);
        localStorage.setItem("countries", JSON.stringify(data));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountriesFromLocalStorage = () => {
    const cachedData = localStorage.getItem("countries");
    if (cachedData) {
      setCountries(JSON.parse(cachedData));
      setFilteredCountries(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchCountriesFromApi();
    }
  };

  return {
    countries,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    error,
    fetchCountriesFromApi,
    fetchCountriesFromLocalStorage,
  };
};

export default useFetchData;
