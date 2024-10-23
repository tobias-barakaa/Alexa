import React, { useState } from 'react';
import { useGetNewJobsQuery } from '../../../slices/writers/writerApiSlice';
import './ViewNewJobs.css'; // Import styles from an external CSS file

const ViewNewJobs = () => {
  const { data, isLoading, isError } = useGetNewJobsQuery();
  const [hoveredJobId, setHoveredJobId] = useState(null);

  if (isLoading) {
    return <div className="loadingText">Loading available jobs...</div>;
  }

  if (isError) {
    return <div className="errorText">Error loading jobs. Please try again later.</div>;
  }

  const jobs = data?.pendingOrders || [];

  const handlePickJob = (jobId) => {
    console.log(`Picking job ${jobId}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="container">
      <div className="jobsGrid">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`jobCard ${hoveredJobId === job.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredJobId(job.id)}
            onMouseLeave={() => setHoveredJobId(null)}
          >
            <div className="header">
              <div>
                <div className="title">{job.title}</div>
                <div className="projectType">Type: {job.project_type}</div>
              </div>
              <div className="budget">${job.budget}</div>
            </div>

            <div className="detailsGrid">
              <div className="detailItem">
                <span className="label">Deadline</span>
                <span className="value">{job.deadline}</span>
              </div>
              <div className="detailItem">
                <span className="label">Status</span>
                <span className="status">{job.status}</span>
              </div>
              <div className="detailItem">
                <span className="label">Posted</span>
                <span className="value">{formatDate(job.created_at)}</span>
              </div>
              <div className="detailItem">
                <span className="label">Payment Status</span>
                <span className="value">{job.is_paid ? 'Paid' : 'Pending Payment'}</span>
              </div>
            </div>

            <div className="description">
              <div className="label">Description</div>
              <div className="value">{job.description}</div>
            </div>

            <div className="requirements">
              <div className="label">Requirements</div>
              <div className="value">{job.requirements}</div>
            </div>

            <button
              className="button"
              onClick={() => handlePickJob(job.id)}
            >
              Pick This Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNewJobs;
