import React, { useContext, useState } from "react";
import { addJobAsync, deleteJobAsync } from "../api/dataService";
import UserContext from "../contexts/userContext";
import JobForm from "./JobForm";
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
          {isModalOpen && <JobForm setIsModalOpen={setIsModalOpen}/>}
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
