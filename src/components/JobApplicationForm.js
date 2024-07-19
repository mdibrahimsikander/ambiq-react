import React, { useState } from 'react';
import { ref, set, getDatabase } from 'firebase/database';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import "../styles/JobApplicationForm.css";
import emailjs from '@emailjs/browser';


const JobApplicationForm = ({ job }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        jobRole: '',
        resume: null,
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State for popup visibility
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner
    const [error, setError] = useState(null); // State for error message

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show spinner
        setError(null); // Reset error state

        const { name, email, phone, address, jobRole, resume, message } = formData;

        const db = getDatabase();
        const storage = getStorage();

        try {
            // Upload resume to Firebase Storage
            const storageReference = storageRef(storage, `resumes/${resume.name}`);
            const uploadTask = uploadBytesResumable(storageReference, resume);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Handle progress
                },
                (error) => {
                    console.error('Upload error:', error);
                    setError('Error uploading resume. Please try again.');
                    setIsLoading(false); // Hide spinner on error
                    setIsSubmitted(true); // Show popup
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                    // Save form data to Firebase Database
                    const newApplicationRef = ref(db, 'jobApplications/' + job.title.replace(/\s+/g, '_'));
                    await set(newApplicationRef, {
                        name,
                        email,
                        phone,
                        address,
                        jobRole,
                        resumeURL: downloadURL,
                        message
                    });

                    // Show success popup
                    setIsSubmitted(true);
                    setIsLoading(false); // Hide spinner


                    const templateParams = {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                        jobRole: formData.jobRole,
                        message: formData.message,
                        resume:downloadURL,
                    };


                   emailjs
                        .sendForm("service_e4zj7bn", "template_e91nkg7", templateParams, {
                            publicKey: "9tne6huH6b2t2Jula",
                        })
                        .then(
                            () => {
                                console.log('SUCCESS!');
                            },
                            (error) => {
                                console.log('FAILED...', error.text);
                            },
                        );


                    // Clear form fields
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        jobRole: '',
                        resume: null,
                        message: ''
                    });



                    // console.log('Application submitted successfully!');
                }
            );
        } catch (error) {
            console.error('Error submitting application:', error);
            setError('Error submitting application. Please try again.');
            setIsLoading(false); // Hide spinner on error
            setIsSubmitted(true); // Show popup
        }
    };

    return (
        <section className="jobs_section layout_padding bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 className="padding">DET<span>AILS</span></h2>
                            </div>
                            <p>{job.JobDetails}</p>
                            <h6>Job Responsibilities:</h6>
                            <div dangerouslySetInnerHTML={{ __html: job.JobResponsibilities }}></div>
                            <h6>Job Requirements</h6>
                            <div dangerouslySetInnerHTML={{ __html: job.JobRequirements }}></div>
                        </div> 
                    </div>
                    <div className="col-md-6 up">
                        <div className="heading_container">
                            <h2>JOB <span>APPLICATION FORM</span></h2>
                        </div>
                        <div className="contain">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobRole">Job Role:</label>
                                    <input type="text" id="jobRole" name="jobRole" value={formData.jobRole} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="resume">Resume:</label>
                                    <input type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" disabled={isLoading}>
                                    Submit Application
                                </button>
                                {isLoading && <div className="spinner"></div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup for submission status */}
            {isSubmitted && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{error ? 'Submission Error' : 'Success!'}</h3>
                        <p>{error ? error : 'Your application has been successfully submitted.'}</p>
                        <button onClick={() => { setIsSubmitted(false); setError(null); }}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default JobApplicationForm;
