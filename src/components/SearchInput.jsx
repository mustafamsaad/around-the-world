import React from "react";

const SearchInput = ({ searchQuery, onSearchChange }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-[480px] items-center gap-5 rounded-full bg-white p-3 shadow dark:bg-gray-800">
      <div className="pl-3">
        <svg
          className="h-5 w-5 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          />
        </svg>
      </div>
      <input
        onChange={handleInputChange}
        value={searchQuery}
        type="text"
        placeholder="Search for country..."
        className="flex-1 bg-transparent outline-none placeholder:text-gray-600 dark:text-gray-100 dark:placeholder:text-gray-400"
      />
    </form>
  );
};

export default SearchInput;
