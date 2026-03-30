import React from "react";

const SearchBar = ({ query = "", onQueryChange = () => {} }) => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="border border-white bg-gray-900 px-4 focus-within:ring-2 focus-within:ring-orange-500"
    >
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="w-full bg-gray-900 text-white placeholder-gray-400 py-2 focus:outline-none"
      />
    </form>
  );
};

export default SearchBar;
