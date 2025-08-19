import React, { useEffect, useState } from "react";
import { fetchStations } from "../api";
import StationCard from "../components/StationCard";
import StationList from "../components/StationList";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const [stations, setStations] = useState([]);
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("card");

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 300000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const { data } = await fetchStations();
    setStations(data);
  };

  const filtered = stations.filter(
    (st) => filter === "All" || st.latestReading?.status === filter
  );

  return (
    <div className="container mt-5">
      {/* Centered heading with bold style */}
      <h2 className="text-center fw-bold mb-5">
        ⛽ Fuel Stations Dashboard
      </h2>

      {/* Better aligned FilterBar with padding and shadow */}
      <div className="d-flex justify-content-center mb-5">
        <div className="p-3 rounded shadow-sm bg-light w-100" style={{ maxWidth: "900px" }}>
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            view={view}
            setView={setView}
          />
        </div>
      </div>

      {/* Card view */}
      {view === "card" ? (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {filtered.map((st) => (
            <div
              key={st.stationId}
              className="flex-grow-1 flex-shrink-0"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <StationCard station={st} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <StationList stations={filtered} />
        </div>
      )}
    </div>
  );
}
