import React from "react";

export default function FilterBar({ filter, setFilter, view, setView }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <button className={`btn btn-${filter==="All"?"primary":"outline-primary"} me-2`} onClick={() => setFilter("All")}>All</button>
        <button className={`btn btn-${filter==="Active"?"success":"outline-success"} me-2`} onClick={() => setFilter("Active")}>Active</button>
        <button className={`btn btn-${filter==="Inactive"?"danger":"outline-danger"}`} onClick={() => setFilter("Inactive")}>Inactive</button>
      </div>
      <div>
        <button className={`btn btn-${view==="card"?"dark":"outline-dark"} me-2`} onClick={() => setView("card")}>Card View</button>
        <button className={`btn btn-${view==="list"?"dark":"outline-dark"}`} onClick={() => setView("list")}>List View</button>
      </div>
    </div>
  );
}
