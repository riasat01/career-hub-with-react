import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Navbar = () => {
    return (
        <div>
            <h1>this is navbar</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navbar;