import React, { useContext, useEffect, useState } from "react";
import { getJobsAsync } from "../api/dataService";
import { Account } from "appwrite";
import "./tracker.css";
import Table from "./Table.jsx";
import TrackerHeader from "./TrackerHeader.jsx";
import UserContext from "../contexts/userContext";
import { appwriteClient } from "../appwriteClient/client";

const Tracker = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [allJobs, setAllJobs] = useState([]);
  const [jobsList, setJobsList] = useState([]);

  const account = new Account(appwriteClient);

  useEffect(() => {
    if (!userId) {
      getAccount();
    } else {
      fetchAndSetJobs();
    }
  }, [userId]);

  async function getAccount() {
    try {
      const user = await account.get();
      setUserId(user.$id);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAndSetJobs() {
    const jobs = await getJobsAsync(userId);
    setAllJobs(jobs);
    setJobsList(jobs);
  }

  return (
    <section>
      <TrackerHeader allJobs={allJobs} setJobsList={setJobsList} />
      <Table
        setAllJobs={setAllJobs}
        jobsList={jobsList}
        setJobsList={setJobsList}
      />
    </section>
  );
};

export default Tracker;
