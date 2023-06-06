import React from "react";
import { useEffect } from "react";
import "./trackerHeader.css";

const TrackerHeader = ({ allJobs, setJobsList }) => {
  const filterJobs = (filterStatus) => {
    if (filterStatus !== "ALL") {
      const filteredJobs = allJobs.filter((job) => job.status === filterStatus);
      setJobsList(filteredJobs);
    } else {
      setJobsList(allJobs);
    }
  };

  return (
    <section className="tracker-header-container">
      <h1 className="tracker-header">Job Tracker</h1>
      <div className="tracker-header-tabs">
        <h2
          onClick={() => {
            filterJobs("ALL");
          }}
        >
          All
        </h2>
        <h2
          onClick={() => {
            filterJobs("INTERESTED");
          }}
        >
          Interested
        </h2>
        <h2
          onClick={() => {
            filterJobs("APPLIED");
          }}
        >
          Applied
        </h2>
        <h2
          onClick={() => {
            filterJobs("INTERVIEWING");
          }}
        >
          Interviewing
        </h2>
        <h2
          onClick={() => {
            filterJobs("OFFERED");
          }}
        >
          Job Offers
        </h2>
        <h2
          onClick={() => {
            filterJobs("ACCEPTED");
          }}
        >
          Accepted
        </h2>
      </div>
    </section>
  );
};

export default TrackerHeader;
