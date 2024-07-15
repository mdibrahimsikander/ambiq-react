import React, { useState, useEffect } from 'react';
import "../styles/Careers.css";
import jobs from '../Data/activeJobsData.js'; // Adjust the path according to your project structure

const Careers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const jobsToShow = filteredJobs.slice(0, currentPage * jobsPerPage);

    useEffect(() => {
        document.querySelector(".jobs-list-container h2").style.color = "white";
    }, []);

    return (
        <>
            <section className="team_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <span>Careers</span>
                        </h2>
                    </div>
                    <div className="jobs-list-container">
                        <h2>{filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"}</h2>
                        <input
                            className="job-search"
                            type="text"
                            placeholder="Search here..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // Reset to the first page on search
                            }}
                        />
                        <div className="jobs">
                            {jobsToShow.map((job, index) => (
                                <div className="job" key={index}>
                                    <img src={job.image} alt={job.title} />
                                    <h3 className="job-title">{job.title}</h3>
                                    <div className="details">{job.details}</div>
                                    <a href={job.link} className="details-btn">Apply Now</a>
                                    <span className="open-positions">
                                        {job.openPositions}{" "}
                                        {parseInt(job.openPositions) === 1 ? "position" : "positions"}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {jobsToShow.length < filteredJobs.length && (
                            <button className="btn_box" onClick={() => setCurrentPage(currentPage + 1)}>
                                Load More
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Careers;
