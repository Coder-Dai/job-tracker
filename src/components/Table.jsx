import React from "react";
import { addJobAsync } from "../api/dataService";
import "./table.css";

const Table = ({ jobsList, setJobsList }) => {
  async function postJob() {
    await addJobAsync("testing-123");
  }

  return (
    <section>
      <div className="table-container">
        <div className="button-container">
          <button className="delete-button">Delete</button>
          <button className="add-button" onClick={postJob}>
            + Add job
          </button>
        </div>
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
            {jobsList.map((job) => (
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>{job.position}</td>
                <td>{job.company}</td>
                <td>{job.salary}</td>
                <td>{job.location}</td>
                <td>{new Date(job.followUp).toDateString()}</td>
                <td>{new Date(job.deadline).toDateString()}</td>
                <td>{job.status}</td>
                <td>{job.excitement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
