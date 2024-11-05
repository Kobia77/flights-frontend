const FlightList = ({ flights, onBook }) => (
  <div className="space-y-4">
    {flights.length ? (
      flights.map((flight) => (
        <div
          key={flight.id}
          className="p-4 border rounded-lg bg-white shadow-sm text-gray-700"
        >
          <h3 className="text-xl font-semibold">{flight.airline}</h3>
          <p>
            From: {flight.origin} - To: {flight.destination}
          </p>
          <p>Date: {flight.date}</p>
          <button
            onClick={() => onBook(flight)}
            className="mt-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Book Flight
          </button>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No flights available</p>
    )}
  </div>
);

export default FlightList;
