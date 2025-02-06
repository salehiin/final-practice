import { NavLink, Outlet } from "react-router-dom";
import useReads from "../hooks/useReads";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [reads] = useReads();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-950 text-green-200 mr-8">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addBooks">Add Books</NavLink></li>
                            <li><NavLink to="/dashboard/manageBooks">Manage Books</NavLink></li>
                            <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                            <li><NavLink to="/dashboard/review">Review</NavLink></li>
                        </>
                            :
                        <>
                            <li><NavLink to="/dashboard/userHome">User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reads">My Reads</NavLink></li>
                            <li><NavLink to="/dashboard/borrowed">Borrowed</NavLink></li>
                            <li><NavLink to="/dashboard/review">Review</NavLink></li>
                        </>
                    }
                    <div className="divider "></div>
                    <li><NavLink to="/">User Home</NavLink></li>
                    <li><NavLink to="/">Books</NavLink></li>
                    <li><NavLink to="/dashboard/borrowed">Collection <span className="text-yellow-700">({reads.length})</span></NavLink></li>
                    <li><NavLink to="/dashboard/review">Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;