import React from "react";
import "./trackerHeader.css";

const TrackerHeader = () => {
  return (
    <section className="tracker-header-container">
      <h1 className="tracker-header">Job Tracker</h1>
      <div className="tracker-header-tabs">
        <h2>All</h2>
        <h2>Interested</h2>
        <h2>Applied</h2>
        <h2>Interviewing</h2>
        <h2>Job Offers</h2>
        <h2>Accepted</h2>
      </div>
    </section>
  );
};

export default TrackerHeader;
