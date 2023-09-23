import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`jobs.json`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    const [length, setLength] = useState(4);
    // console.log(jobs.length)
    return (
        <div className="text-center mt-32">
            <h1 className="text-5xl font-bold mb-2">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <section className="grid grid-cols-2 gap-8 mt-8">
            {
                jobs.slice(0,length).map((job, i) => <Job key={i} job={job}></Job>)
            }
            </section>
            <button className="my-12 text-white rounded-lg bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] font-semibold px-4 py-2" onClick={() => setLength(jobs.length)}>Show More</button>
        </div>
    );
};

export default FeaturedJobs;