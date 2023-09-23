import {  useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../localstorage/Localstorage";
import ApppliedJob from "../applied-job/ApppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const appliedJobs = getFromLocalStorage();
    const jobsAppllied = jobs.filter(job => {
        // console.log(job.id)
        return appliedJobs.includes(job.id)
    })
    // console.log(jobsAppllied);


    



    return (
        <div>
            <h1>Jobs</h1>
            {
                jobsAppllied.map((job, i) => <ApppliedJob key={i} job={job}></ApppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;