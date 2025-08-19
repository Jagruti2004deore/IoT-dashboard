import React from "react";

export default function StationList({ stations }) {
  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Station</th>
          <th>Status</th>
          <th>Last Seen</th>
          <th>Temperature</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {stations.map(st => (
          <tr key={st.stationId}>
            <td>{st.name}</td>
            <td className={st.latestReading?.status==="Active" ? "text-success" : "text-danger"}>
              {st.latestReading?.status}
            </td>
            <td>{st.latestReading?.lastSeen}</td>
            <td>{st.latestReading?.temperature} °C</td>
            <td>{st.latestReading?.humidity}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
