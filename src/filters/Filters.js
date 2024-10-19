import React from "react";
import "./Filters.css";

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div className="filters">
      <h3>Filter by</h3>
      {/* Filter by Subject */}
      <div className="filter-section">
        <h4>Subject</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.subject.includes("History")}
            onChange={() => handleFilterChange("subject", "History")}
          />
          History
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.subject.includes("Economics")}
            onChange={() => handleFilterChange("subject", "Economics")}
          />
          Economics
        </label>
        {/* Add more filter options as needed */}
      </div>

      {/* Filter by Exam */}
      <div className="filter-section">
        <h4>Exam</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.exam.includes("UPSC")}
            onChange={() => handleFilterChange("exam", "UPSC")}
          />
          UPSC
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.exam.includes("SSC")}
            onChange={() => handleFilterChange("exam", "SSC")}
          />
          SSC
        </label>
        {/* Add more filter options */}
      </div>
    </div>
  );
};

export default Filters;
