import React, { useContext, useEffect, useState } from "react";
import { getJobsAsync } from "../api/dataService";
import "./tracker.css";
import Table from "./Table.jsx";
import TrackerHeader from "./TrackerHeader.jsx";
import UserContext from "../contexts/userContext";

const Tracker = () => {
  const { userId } = useContext(UserContext);
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchAndSetJobs();
    }
  }, [userId]);

  async function fetchAndSetJobs() {
    const jobs = await getJobsAsync(userId);
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
