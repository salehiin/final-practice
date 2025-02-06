import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useReads from "../../../hooks/useReads";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reads] = useReads();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
        <li>
            <Link to="/dashboard/reads">
                <button className="btn">
                    Books
                    <div className="badge badge-secondary">+{reads.length}</div>
                </button>
            </Link>
        </li>

    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Practice</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                <button className="btn">
                                    <img src={user.photoURL} className="w-[50px]" />
                                </button>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                        </> : <>
                            <Link className="btn" to="/login">Login</Link>
                        </>
                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;