const Job = ({ job }) => {

    const gradientBorder = {
        border: `2px solid`,
        borderImage: `linear-gradient(to right, #7E90FE, #9873FF) 1`
    }

    const{logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div style={gradientBorder} className="card card-compact w-96 bg-base-100 shadow-xl m-auto pl-12">
            <figure className="w-fit p-4"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body  space-y-3">
                <h2 className="card-title">{job_title}</h2>
                <p className="w-fit flex-grow-0">{company_name}</p>
                <div className="flex gap-6">
                    <p style={gradientBorder} className="flex-grow-0  bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] text-clip bg-clip-text text-transparent font-semibold px-4 py-2">{remote_or_onsite}</p>
                    <p style={gradientBorder} className="flex-grow-0  bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] text-clip bg-clip-text text-transparent font-semibold px-4 py-2">{job_type}</p>
                </div>
                <div className="flex gap-6">
                    <p className="flex-grow-0">{location}</p>
                    <p className="flex-grow-0">Salary: {salary}</p>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary bg-gradient-to-tr from-[#7E90FE] to-[#9873FF]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Job;