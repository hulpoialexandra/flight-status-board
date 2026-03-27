import "./App.css";
import FlightBoard from "./components/flightBoard/FlightBoard";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-8 flex flex-col gap-6">
      <Header />
      <FlightBoard />
    </div>
  );
}

export default App;
