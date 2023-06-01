import React, { useState } from "react";
import "./tracker.css";
import Table from "./Table.jsx";

const Tracker = () => {
  const [jobsList, setJobsList] = useState([]);

  return (
    <section>
      <Table jobsList={jobsList} setJobsList={setJobsList} />
    </section>
  );
};

export default Tracker;
