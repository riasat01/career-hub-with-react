import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData();
    const id = useParams();
    const idInt = parseInt(id.id);
    const job = jobs.find(j => j.id == idInt);
    // console.log(jobs, job, idInt)
    const { salary, job_title, contact_information } = job;
    const { phone, email, address } = contact_information;
    return (
        <>
            <h1 className="text-5xl mb-40 mt-12">Job details</h1>
            <div className="grid grid-cols-4">
                {/* <h1>job details</h1>
            <p>{job.job_title}</p>
            <p>{job.company_name}</p> */}

                <section className="col-span-3 space-y-4">
                    <p><span className="font-bold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p><span className="font-bold">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <h2 className="font-bold">Educational Requirements:</h2>
                    <p>Bachelor degree to complete any reputational university.</p>
                    <h2 className="font-bold">Experiences:</h2>
                    <p>2-3 Years in this field.</p>
                </section>
                <section>
                    <div className=" space-y-4 bg-slate-900 shadow-xl p-8 rounded-xl">
                        <h2 className="font-bold border-b">Job Details</h2>
                        <p>{salary}</p>
                        <p>{job_title}</p>
                        <h2 className="font-bold border-b">Contact Information</h2>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>{address}</p>
                    </div>
                    <button className="w-full bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] my-3 py-2 rounded-lg text-white text-xl font-medium">Apply Now</button>
                </section>
            </div>
        </>
    );
};

export default JobDetails;