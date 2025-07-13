import { useState, useEffect } from "react";
import useFetchData from "../useFetchData.js";
import RegionMenu from "../components/RegionMenu.jsx";
import SearchInput from "../components/SearchInput.jsx";
import CardsContainer from "../components/CardsContainer.jsx";

function HomePage() {
  const {
    countries,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    error,
  } = useFetchData();

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let result = [...countries];

    if (selectedRegion && selectedRegion.value !== "all") {
      result = result.filter(
        (country) => country.region.toLowerCase() === selectedRegion.value
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      );
    }

    setFilteredCountries(result);
  }, [countries, selectedRegion, searchQuery]);

  const handleRegionChange = (option) => {
    setSelectedRegion(option);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {isLoading && (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      )}
      {error && (
        <div className="flex h-screen items-center justify-center">
          Error: {error.message}
        </div>
      )}
      {!isLoading && !error && (
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="w-full">
              <SearchInput
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            </div>
            <div className="flex w-full justify-end md:max-w-xs">
              <RegionMenu
                selectedRegion={selectedRegion}
                onRegionChange={handleRegionChange}
              />
            </div>
          </div>
          <CardsContainer countries={filteredCountries} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
