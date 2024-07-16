import React from 'react';
import "../styles/JobApplicationForm.css"





const JobApplicationForm = ({job}) => {

   
    



    return (

        <section className="jobs_section layout_padding bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    DET<span>AILS</span>
                                </h2>
                            </div>
                            <p>
                                {job.JobDetails}

                            </p>
                            <h6>Job Responsibilities:</h6>

                            <div dangerouslySetInnerHTML={{ __html: job.JobResponsibilities}}></div>

                            <h6>Job Requirements</h6>

                            <div dangerouslySetInnerHTML={{ __html:  job.JobRequirements  }}></div>


                        </div>
                    </div>

                    <div className="col-md-6 ">

                        <div className="heading_container">
                            <h2>
                                JOB <span>APPLICATION FORM</span>
                            </h2>
                        </div>

                        <div className="contain">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone:</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <div className="form-group">
                                    <label for="address">Address:</label>
                                    <input type="text" id="address" name="address" required />
                                </div>
                                <div className="form-group">
                                    <label for="Job Role">Job Role:</label>
                                    <input type="text" id="job_role" name="job_role" required />
                                </div>
                                <div className="form-group">
                                    <label for="resume">Resume:</label>
                                    <input type="file" id="resume" name="resume" accept=".pdf" required />
                                </div>
                                <div className="form-group">
                                    <label for="message">Message:</label>
                                    <textarea id="message" name="message" placeholder="Write your Message here..."
                                        required></textarea>
                                </div>
                                <button type="button" id="submit">Submit Application</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default JobApplicationForm;
