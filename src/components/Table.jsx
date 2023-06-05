import React, { useState } from "react";
import { addJob } from "../api/dataService";
import "./table.css";

const Table = ({ jobsList, setJobsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => {
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="table-container">
        <div className="button-container">
          <button className="delete-button">Delete</button>
          <button className="add-button" onClick={openForm}>
            + Add job
          </button>
          {isModalOpen && (
            <div id="form-container">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                X
              </button>
              <h2>Add a New Job Post</h2>
              <form id="form-modal" onSubmit={addJob}>
                <label htmlFor="position">Position</label>
                <input
                  id="position"
                  type="text"
                  placeholder="Position"
                ></input>
                <label htmlFor="company">Company</label>
                <input
                  id="Company"
                  type="text"
                  placeholder="Company"
                ></input>
                <label htmlFor="salary">Salary</label>
                <input
                  id="salary"
                  type="number"
                  placeholder="Salary"
                ></input>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Location"
                ></input>
                <label htmlFor="followup">Follow up</label>
                <input
                  id="followup"
                  type="date"
                  placeholder="Follow up"
                ></input>
                <label htmlFor="deadline">Deadline</label>
                <input
                  id="deadline"
                  type="date"
                  placeholder="Deadline"
                ></input>
                <label htmlFor="status">Status</label>
                <input
                  id="status"
                  type="text"
                  placeholder="Status"
                ></input>
                <label htmlFor="excitement">Excitement</label>
                <input
                  id="excitement"
                  type="text"
                  placeholder="Excitement"
                ></input>
                <label htmlFor="description">Job Description</label>
                <input
                  id="description"
                  type="textfield"
                  placeholder="Excitement"
                ></input>
                <button type="submit">Sumbit</button>
              </form>
            </div>
          )}
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
