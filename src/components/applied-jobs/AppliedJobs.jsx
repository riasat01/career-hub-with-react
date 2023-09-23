import { Link, useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../localstorage/Localstorage";
import ApppliedJob from "../applied-job/ApppliedJob";
import { useState } from "react";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const appliedJobs = getFromLocalStorage();
    const jobsAppllied = jobs.filter(job => {
        // console.log(job.id)
        return appliedJobs.includes(job.id)
    })
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleFilter = filter => {
        if(filter === `all`){
            setDisplayJobs(jobsAppllied);
        }else if(filter === `remote`){
            const temp = jobsAppllied.filter(job => job.remote_or_onsite === `Remote`);
            setDisplayJobs(temp);
        }else{
            const temp = jobsAppllied.filter(job => job.remote_or_onsite === `Onsite`);
            setDisplayJobs(temp);
        }
    }






    return (
        <div>
            <section className="flex justify-between">
                <h1>Jobs</h1>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><Link onClick={() => handleFilter(`all`)}>All</Link></li>
                        <li><Link onClick={() => handleFilter(`remote`)}>Remote</Link></li>
                        <li><Link onClick={() => handleFilter(`onsite`)}>On Site</Link></li>
                    </ul>
                </details>
            </section>
            {
                displayJobs.length > 0 ? displayJobs.map((job, i) => <ApppliedJob key={i} job={job}></ApppliedJob>) : jobsAppllied.map((job, i) => <ApppliedJob key={i} job={job}></ApppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;