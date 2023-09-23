import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Statistics from "../components/statistics/Statistics";
import AppliedJobs from "../components/applied-jobs/AppliedJobs";
import Blogs from "../components/blogs/Blogs";
import ErrorPage from "../components/error-page/ErrorPage";

const MainLayout = () => {
    const myRouter= createBrowserRouter([
        {
            path: `/`,
            element: <Navbar></Navbar>,
            children: [
                {
                    path: `/`,
                    element: <Home></Home>
                },
                {
                    path: `/statistics`,
                    element: <Statistics></Statistics>
                },
                {
                    path: `/applied`,
                    element: <AppliedJobs></AppliedJobs>
                },
                {
                    path: `/blogs`,
                    element: <Blogs></Blogs>
                }
            ],
            errorElement: <ErrorPage></ErrorPage>
        }
    ])
    return (
        <div>
            <RouterProvider router={myRouter}>

            </RouterProvider>
        </div>
    );
};

export default MainLayout;