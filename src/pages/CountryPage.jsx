import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../useFetchData.js";
import NoPage from "./NoPage.jsx";

const CountryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const searchName = name.replace(/-/g, " ");

  const { countries: country, isLoading, error } = useFetchData(searchName);

  const handleBackClick = () => {
    navigate("/");
  };

  if (error || (!isLoading && !country)) {
    return <NoPage />;
  }

  const nativeName = country?.name?.nativeName
    ? Object.values(country.name.nativeName)[0]?.common ||
      country.name?.common ||
      "N/A"
    : country?.name?.common || "N/A";
  const population = country?.population?.toLocaleString() || "N/A";
  const region = country?.region || "N/A";
  const subregion = country?.subregion || "N/A";
  const capital = country?.capital?.[0] || "N/A";
  const topLevelDomain = country?.tld ? country.tld.join(", ") : "N/A";
  const currencies = country?.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";
  const languages = country?.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="container mx-auto px-5 py-8 md:px-8">
      {isLoading && (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      )}

      <button
        onClick={handleBackClick}
        className="mb-8 flex items-center gap-2 rounded-lg bg-white px-6 py-3 shadow-md transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <svg
          className="h-5 w-5 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <span className="text-gray-700 dark:text-gray-200">Back</span>
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-full max-w-md">
            <img
              src={country?.flags?.svg || country?.flags?.png}
              alt={`Flag of ${country?.name?.common}`}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mb-6 text-2xl font-bold md:text-3xl">
            {country?.name?.common}
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-3">
              <div className="text-sm md:text-base">
                <span className="font-semibold">Native Name: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {nativeName}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Population: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {population}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Region: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {region}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Sub Region: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {subregion}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Capital: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {capital}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm md:text-base">
                <span className="font-semibold">Top Level Domain: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {topLevelDomain}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Currencies: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {currencies}
                </span>
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold">Languages: </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {languages}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
