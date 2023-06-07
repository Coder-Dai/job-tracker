import React, { useState } from "react";
import { deleteJobAsync } from "../api/dataService";

import JobForm from "./JobForm";
import "./table.css";

const Table = ({ setAllJobs, jobsList, setJobsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedJobs, setCheckedJobs] = useState([]);

  const openForm = () => {
    setIsModalOpen(true);
  };

  async function deleteJob() {
    const newJobsList = [...jobsList];

    for (let i = 0; i < checkedJobs.length; i++) {
      const jobId = checkedJobs[i];

      let index;

      for (let j = 0; j < newJobsList.length; j++) {
        const job = newJobsList[j];

        if (job.$id === jobId) {
          index = j;
        }
      }

      newJobsList.splice(index, 1);

      await deleteJobAsync(jobId);
    }

    setAllJobs(newJobsList);
    setJobsList(newJobsList);

    setCheckedJobs([]);
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
                  <input
                    type="checkbox"
                    onClick={() => {
                      if (checkedJobs.includes(job.$id)) {
                        const index = checkedJobs.indexOf(job.$id);
                        checkedJobs.splice(index, 1);

                        setCheckedJobs(checkedJobs);
                      } else {
                        setCheckedJobs((currCheckedJobs) => [
                          ...currCheckedJobs,
                          job.$id,
                        ]);
                      }
                    }}
                  ></input>
                </td>
                <td>{job.position}</td>
                <td>{job.company}</td>
                <td>{job.salary}</td>
                <td>{job.location}</td>
                <td>
                  {job.followUp ? new Date(job.followUp).toDateString() : null}
                </td>
                <td>
                  {job.deadline ? new Date(job.deadline).toDateString() : null}
                </td>
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
