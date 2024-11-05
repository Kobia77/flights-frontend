import { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightList from "../components/FlightList";
import "../styles/globals.css";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const searchFlights = async (searchParams) => {
    const mockFlights = [
      {
        id: 1,
        airline: "Air Georgia",
        origin: searchParams.origin,
        destination: searchParams.destination,
        date: searchParams.date,
      },
      {
        id: 2,
        airline: "SkyLine",
        origin: searchParams.origin,
        destination: searchParams.destination,
        date: searchParams.date,
      },
    ];
    setFlights(mockFlights);
  };

  const bookFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleBooking = () => {
    alert(`Flight booked with ${selectedFlight.airline}`);
    setSelectedFlight(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Flight Booking System
      </h1>
      <div className="max-w-4xl mx-auto">
        <SearchForm onSearch={searchFlights} />
        <FlightList flights={flights} onBook={bookFlight} />

        {selectedFlight && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md  text-gray-700">
            <h2 className="text-2xl font-semibold">Booking Confirmation</h2>
            <p>Airline: {selectedFlight.airline}</p>
            <p>
              From: {selectedFlight.origin} - To: {selectedFlight.destination}
            </p>
            <p>Date: {selectedFlight.date}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleBooking}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Confirm Booking
              </button>
              <button
                onClick={() => setSelectedFlight(null)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
