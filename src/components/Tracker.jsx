import React, { useState } from "react";
import "./tracker.css";
import Table from "./Table.jsx";
import data from "../mock-table-data.json";

const Tracker = () => {
  const [jobsList, setJobsList] = useState(data);

  return (
    <section>
      <Table jobsList={jobsList} setJobsList={setJobsList}/>
    </section>
  );
};

export default Tracker;
