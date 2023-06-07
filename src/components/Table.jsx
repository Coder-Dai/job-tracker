import React, { useState } from "react";
import { deleteJobAsync } from "../api/dataService";

import JobForm from "./JobForm";
import "./table.css";

const Table = ({ setAllJobs, jobsList, setJobsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => {
    setIsModalOpen(true);
  };

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
            <JobForm
              setIsModalOpen={setIsModalOpen}
              setAllJobs={setAllJobs}
              jobsList={jobsList}
              setJobsList={setJobsList}
            />
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
