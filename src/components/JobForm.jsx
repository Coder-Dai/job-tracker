const JobForm = ({setIsModalOpen}) => {
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
    )
}

export default JobForm;