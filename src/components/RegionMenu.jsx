import Select from "react-select";

const RegionMenu = ({ selectedRegion, onRegionChange }) => {
  const options = [
    { value: "all", label: "All Regions" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <div className="w-52">
      <Select
        options={options}
        placeholder="Filter by Region"
        isClearable={false}
        isSearchable={false}
        unstyled
        value={selectedRegion}
        onChange={onRegionChange}
        classNames={{
          control: () =>
            "bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center pl-4 pr-2 py-2 border-none hover:cursor-pointer",
          menu: () =>
            "bg-white dark:bg-gray-800 mt-0.5 rounded shadow border-none",
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? "bg-gray-100 dark:bg-gray-700" : ""} 
             ${isSelected ? "bg-gray-100 dark:bg-gray-700" : ""} 
             dark:text-gray-100 hover:cursor-pointer px-4 py-1`,
          placeholder: () => "dark:text-gray-100",
          singleValue: () => "dark:text-gray-100",
          dropdownIndicator: () =>
            "text-gray-600 dark:text-gray-100 hover:dark:text-white",
          indicatorSeparator: () => "hidden",
        }}
      />
    </div>
  );
};

export default RegionMenu;
