import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the job ID from URL params
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import "./ManageProject.css";

const ManageProject = () => {
    const { jobId } = useParams(); // Assume job ID is in the URL
    const [jobDetails, setJobDetails] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulated job data
    const dummyJobData = {
        id: jobId,
        title: "Sample Job Title",
        description: "This is a detailed description of the job that needs to be done.",
        requirements: "1. Requirement 1\n2. Requirement 2\n3. Requirement 3",
        budget: 100,
        status: "In Progress",
        is_paid: false,
    };

    useEffect(() => {
        // Simulate fetching job details
        const fetchJobDetails = () => {
            try {
                setJobDetails(dummyJobData);
                setEditorContent(dummyJobData.description); // Initialize editor with the job's description
            } catch (err) {
                setError('Error fetching job details');
            } finally {
                setLoading(false);
            }
        };
        fetchJobDetails();
    }, [jobId]);

    const handleSaveChanges = async () => {
        // Logic to save changes
        try {
            // Simulating a save operation
            console.log('Changes saved:', { description: editorContent });
            alert('Changes saved successfully!');
        } catch (err) {
            alert('Error saving changes');
        }
    };

    const handleSubmitWork = async () => {
        // Logic to submit the work
        try {
            // Simulating a submit operation
            console.log('Work submitted for job ID:', jobId);
            alert('Work submitted successfully!');
        } catch (err) {
            alert('Error submitting work');
        }
    };

    if (loading) return <div>Loading job details...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="manage-job-container">
            <h1>Manage Job: {jobDetails.title}</h1>
            <div className="job-details">
                <h2>Job Details</h2>
                <p><strong>Description:</strong> {jobDetails.description}</p>
                <p><strong>Requirements:</strong> {jobDetails.requirements}</p>
                <p><strong>Budget:</strong> ${jobDetails.budget}</p>
                <p><strong>Status:</strong> {jobDetails.status}</p>
                <p><strong>Payment Status:</strong> {jobDetails.is_paid ? 'Paid' : 'Pending Payment'}</p>
            </div>
            <div className="editor-container">
                <h2>Edit Job Description</h2>
                <ReactQuill 
                    value={editorContent}
                    onChange={setEditorContent}
                    modules={{
                        toolbar: [
                            [{ 'header': [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            ['link', 'image'],
                            ['clean'] // Remove formatting button
                        ],
                    }}
                />
            </div>
            <div className="action-buttons">
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={handleSubmitWork}>Submit Work</button>
            </div>
        </div>
    );
};

export default ManageProject;
