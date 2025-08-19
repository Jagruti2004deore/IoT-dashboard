import React from "react";

export default function StationCard({ station }) {
  const reading = station.latestReading;

  // Format timestamp to readable string
  const formattedTime = reading?.timestamp
    ? new Date(reading.timestamp).toLocaleString()
    : "-";

  return (
    <div className="card shadow-lg border-0 rounded-3 h-100">
      {/* Card Header with stronger background and padding */}
      <div
        className={`card-header text-white fw-bold text-center py-3 ${
          reading?.status === "Active" ? "bg-success" : "bg-danger"
        }`}
      >
        {station.name} <small className="fw-normal">({station.stationId})</small>
      </div>

      {/* Card Body with better spacing */}
      <div className="card-body px-4 py-3">
        <p className="mb-3">
          <strong>Status:</strong>{" "}
          <span
            className={`badge px-3 py-2 ${
              reading?.status === "Active" ? "bg-success" : "bg-danger"
            }`}
          >
            {reading?.status || "-"}
          </span>
        </p>

        <p className="mb-2 text-muted">
          <strong>Last Seen:</strong> {reading?.lastSeen || "-"}
        </p>

        <p className="mb-2 text-muted">
          <strong>Last Update:</strong> {formattedTime}
        </p>

        <p className="mb-2">
          <strong>Temperature:</strong>{" "}
          <span className="text-primary">{reading?.temperature || "-"} °C</span>
        </p>

        <p className="mb-2">
          <strong>Humidity:</strong>{" "}
          <span className="text-info">{reading?.humidity || "-"}%</span>
        </p>

        <p className="mb-0">
          <strong>Location:</strong>{" "}
          <span className="text-secondary">
            {station.location
              ? `${station.location.lat.toFixed(2)}, ${station.location.lon.toFixed(2)}`
              : "-"}
          </span>
        </p>
      </div>
    </div>
  );
}
