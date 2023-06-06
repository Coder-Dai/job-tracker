import React, { useContext, useState } from "react";
import { addJobAsync, deleteJobAsync } from "../api/dataService";
import UserContext from "../contexts/userContext";
import "./table.css";

const Table = ({ setAllJobs, jobsList, setJobsList }) => {
  const { userId } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => {
    setIsModalOpen(true);
  };

  async function postJob(e) {
    e.preventDefault();

    if (userId) {
      const docId = crypto.randomUUID();

      const job = {
        $id: docId,
        userId,
        position: e.target[0].value,
        company: e.target[1].value,
        salary: e.target[2].value,
        location: e.target[3].value,
        followUp: new Date(e.target[4].value).toISOString(),
        deadline: new Date(e.target[5].value).toISOString(),
        status: "INTERESTED",
        excitement: 1,
      };

      const newJobsList = [...jobsList];
      newJobsList.push(job);

      setAllJobs(newJobsList);
      setJobsList(newJobsList);

      await addJobAsync(job);
    } else {
      console.log("userId is null");
    }
  }

  async function deleteJob() {
    if (jobsList.length !== 0) {
      await deleteJobAsync(jobsList[0].$id);

      const newJobsList = [...jobsList];
      newJobsList.shift();

      setAllJobs(newJobsList);
      setJobsList(newJobsList);
    }
  }

  return (
    <section>
      <div className="table-container">
        <div className="button-container">
          <button className="delete-button" onClick={deleteJob}>
            Delete
          </button>
          <button className="add-button" onClick={openForm}>
            + Add job
          </button>
          {isModalOpen && (
            <div id="form-container">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                id="form-close-btn"
              >
                X
              </button>
              <h2 id="form-heading">Add a New Job Post</h2>
              <form id="form-modal" onSubmit={postJob}>
                <div>
                  <label htmlFor="position">Position</label>
                  <input id="position" type="text"></input>
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input id="Company" type="text"></input>
                </div>
                <div>
                  <label htmlFor="salary">Salary</label>
                  <input id="salary" type="number"></input>
                </div>
                <div>
                  <label htmlFor="location">Location</label>
                  <input id="location" type="text"></input>
                </div>
                <div>
                  <label htmlFor="followup">Follow up</label>
                  <input id="followup" type="date"></input>
                </div>
                <div>
                  <label htmlFor="deadline">Deadline</label>
                  <input id="deadline" type="date"></input>
                </div>
                <div>
                  <label htmlFor="status">Status</label>
                  <input id="status" type="text"></input>
                </div>
                <div>
                  <label htmlFor="excitement">Excitement</label>
                  <input id="excitement" type="text"></input>
                </div>
                <div>
                  <label htmlFor="description">Job Description</label>
                  <input id="description" type="textfield"></input>
                </div>
                <button type="submit" id='form-submit-btn'>Save</button>
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
            {jobsList?.map((job) => (
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
