import React, { useContext } from "react";
import { addJobAsync, deleteJobAsync } from "../api/dataService";
import UserContext from "../contexts/userContext";
import "./table.css";

const Table = ({ jobsList, setJobsList }) => {
  const { userId } = useContext(UserContext);

  async function postJob() {
    if (userId) {
      const docId = crypto.randomUUID();

      const job = {
        $id: docId,
        userId,
        position: "Software Developer",
        company: "Fake Company",
        salary: 100000,
        location: "London",
        followUp: new Date("2024-01-01").toISOString(),
        deadline: new Date("2024-01-01").toISOString(),
        status: "INTERESTED",
        excitement: 1,
      };

      setJobsList((currJobsList) => {
        currJobsList.push(job);
        setJobsList(currJobsList);
      });

      await addJobAsync(job);
    }
  }

  async function deleteJob() {
    if (jobsList.length !== 0) {
      await deleteJobAsync(jobsList[0].$id);

      setJobsList((currJobsList) => {
        currJobsList.shift();
        setJobsList(currJobsList);
      });
    }
  }

  return (
    <section>
      <div className="table-container">
        <div className="button-container">
          <button className="delete-button" onClick={deleteJob}>
            Delete
          </button>
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
              <tr key={job.$id}>
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
