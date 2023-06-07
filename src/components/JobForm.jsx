import { useContext } from "react";
import { addJobAsync } from "../api/dataService";
import UserContext from "../contexts/userContext";

const JobForm = ({ setIsModalOpen, setAllJobs, jobsList, setJobsList }) => {
  const { userId } = useContext(UserContext);

  async function postJob(e) {
    e.preventDefault();
    setIsModalOpen(false);

    if (userId) {
      const docId = crypto.randomUUID();

      const job = {
        $id: docId,
        userId,
        position: e.target[0].value,
        company: e.target[1].value,
        salary: e.target[2].value,
        location: e.target[3].value,
        followUp: e.target[4].value
          ? new Date(e.target[4].value).toISOString()
          : undefined,
        deadline: e.target[5].value
          ? new Date(e.target[5].value).toISOString()
          : undefined,
        status: e.target[6].value,
        excitement: e.target[7].value,
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

  return (
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
          <label htmlFor="position">Position *</label>
          <input id="position" type="text" required></input>
        </div>
        <div>
          <label htmlFor="company">Company *</label>
          <input id="Company" type="text" required></input>
        </div>
        <div>
          <label htmlFor="salary">Salary *</label>
          <input id="salary" type="number" required></input>
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
          <select name="status" id="status">
            <option value="INTERESTED" selected="selected">
              Interested
            </option>
            <option value="APPLIED">Applied</option>
            <option value="INTERVIEWING">Interviewing</option>
            <option value="OFFERED">Offered</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
        <div>
          <label htmlFor="excitement">Excitement</label>
          <select name="excitement" id="excitement">
            <option value="1" selected="selected">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Job Description</label>
          <input id="description" type="textfield"></input>
        </div>
        <button type="submit" id="form-submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default JobForm;
