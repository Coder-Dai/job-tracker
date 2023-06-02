import React, { useEffect, useState } from "react";
import { getJobsAsync } from "../api/dataService";
import "./tracker.css";
import Table from "./Table.jsx";
import TrackerHeader from "./TrackerHeader.jsx";

const Tracker = () => {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    fetchJobs();
  });

  async function fetchJobs() {
    const jobs = await getJobsAsync("testing-123");
    setJobsList(jobs);
  }

  return (
    <section>
      <TrackerHeader />
      <Table jobsList={jobsList} setJobsList={setJobsList} />
    </section>
  );
};

export default Tracker;
