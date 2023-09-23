import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";

const MainLayout = () => {
    const myRouter= createBrowserRouter([
        {
            path: `/`,
            element: <Navbar></Navbar>,
            children: [
                {
                    path: `/`,
                    element: <Home></Home>
                }
            ]
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