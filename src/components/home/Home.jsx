import Banner from "../banner/Banner";
import FeaturedJobs from "../featured-jobs/FeaturedJobs";
import JobCategory from "../job-category/JobCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;