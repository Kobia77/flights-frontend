import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center gap-4 mb-6  text-gray-700"
    >
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-1/4"
        required
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-1/4"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-1/4"
        required
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg w-full md:w-1/6 hover:bg-blue-600"
      >
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;
