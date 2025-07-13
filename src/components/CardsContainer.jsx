import CountryCard from "./Card.jsx";
import EmptySearch from "./EmptySearch.jsx";

const CardsContainer = ({ countries }) => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              img={country.flags.svg}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 dark:text-gray-400">
            <EmptySearch />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
