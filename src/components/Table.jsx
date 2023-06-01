import React, { useState } from "react";
import data from "../mock-table-data.json";

const Table = () => {
  const [jobs, setJobs] = useState(data);

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>Position</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Follow-up</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Excitement</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{job.position}</td>
              <td>{job.company}</td>
              <td>{job.salary}</td>
              <td>{job.location}</td>
              <td>{job.followUp}</td>
              <td>{job.deadline}</td>
              <td>{job.status}</td>
              <td>{job.excitement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
