import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`jobs.json`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="text-center mt-32">
            <h1 className="text-5xl font-bold mb-2">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <section className="grid grid-cols-2 gap-8 mt-8">
            {
                jobs.map((job, i) => <Job key={i} job={job}></Job>)
            }
            </section>
        </div>
    );
};

export default FeaturedJobs;