import { Link } from "react-router-dom";

const CountryCard = ({ name, img, region, population, capital }) => {
  return (
    <Link
      to={`/${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="no-underline"
    >
      <div className="w-[264px] rounded-lg bg-white pb-7 shadow-md dark:bg-gray-800 dark:text-white">
        <div className="p-4">
          <img
            src={img}
            alt={`Flag of ${name}`}
            className="h-40 w-full rounded-md object-cover"
          />
        </div>
        <div className="px-6 pb-4">
          <h2 className="mb-2 text-xl font-bold">{name}</h2>
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {capital?.[0] || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
