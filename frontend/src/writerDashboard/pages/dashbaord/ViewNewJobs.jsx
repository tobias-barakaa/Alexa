import { useGetNewJobsQuery } from "../../../slices/writers/writerApiSlice";
import "./ViewNewJobs.css";

const ViewNewJobs = () => {
  const { data, isLoading, isError } = useGetNewJobsQuery();

  if (isLoading) {
    return <div className="loadingText">Loading available jobs...</div>;
  }

  if (isError) {
    return (
      <div className="errorText">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  const jobs = data?.pendingOrders || [];

  const handlePickJob = (jobId) => {
    console.log("Job selected:", jobId);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="container-view-jb">
      <div className="jobsGrid">
        {jobs.map((job) => (
          <div key={job.id} className="job-lg-div">
            <header className="job-header">
              <h2>{job.title}</h2>
              <button
                className="pick-this-job"
                onClick={() => handlePickJob(job.id)}
              >
                Pick This Job
              </button>
            </header>

            <div className="job-meta">
              <div className="meta-item">
                <span className="meta-label">Posted:</span>
                <span>{formatDate(job.created_at)}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Budget:</span>
                <span>${job.budget}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Due Date:</span>
                <span>{job.deadline}</span>
              </div>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-skills">
              <span className={`job-status ${job.is_paid ? "paid" : "pending"}`}>
                {job.is_paid ? "Paid" : "Pending Payment"}
              </span>
              <span className="job-status">{job.status}</span>
            </div>

            






            <div className="job-skills">
              <span className={`job-type `}>
               {job.project_type}
              </span>
            </div>



            <div className="job-actions">
              <button className="action-btn">Pick This job</button>
              <button className="action-btn danger">{job.project_type}</button>
            </div>






          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNewJobs;