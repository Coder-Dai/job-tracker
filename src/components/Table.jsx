import React, { useState } from "react";
import { addJobAsync } from "../api/dataService";
import "./table.css";

const Table = ({ jobsList, setJobsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [followup, setFollowup] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [excitement, setExcitement] = useState("");
  const [description, setDescription] = useState("");

  async function postJob() {
    await addJobAsync("testing-123");
  }

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
                  value={position}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPosition(e.target.value);
                  }}
                  placeholder="Position"
                ></input>
                <label htmlFor="company">Company</label>
                <input
                  id="Company"
                  type="text"
                  value={company}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCompany(e.target.value);
                  }}
                  placeholder="Company"
                ></input>
                <label htmlFor="salary">Salary</label>
                <input
                  id="salary"
                  type="number"
                  value={salary}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setSalary(e.target.value);
                  }}
                  placeholder="Salary"
                ></input>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setLocation(e.target.value);
                  }}
                  placeholder="Location"
                ></input>
                <label htmlFor="followup">Follow up</label>
                <input
                  id="followup"
                  type="date"
                  value={followup}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFollowup(e.target.value);
                  }}
                  placeholder="Follow up"
                ></input>
                <label htmlFor="deadline">Deadline</label>
                <input
                  id="deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDeadline(e.target.value);
                  }}
                  placeholder="Deadline"
                ></input>
                <label htmlFor="status">Status</label>
                <input
                  id="status"
                  type="text"
                  value={status}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setStatus(e.target.value);
                  }}
                  placeholder="Status"
                ></input>
                <label htmlFor="excitement">Excitement</label>
                <input
                  id="excitement"
                  type="text"
                  value={excitement}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setExcitement(e.target.value);
                  }}
                  placeholder="Excitement"
                ></input>
                <label htmlFor="description">Job Description</label>
                <input
                  id="description"
                  type="textfield"
                  value={description}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDescription(e.target.value);
                  }}
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
