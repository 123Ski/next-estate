import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';


const Dashboard = () => {
    const [role] = useRole();
    const { user, logOut } = UseAuth();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <div className="flex justify-end items-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                </div>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-200 pb-16 text-base-content flex flex-col justify-between text-lg">
                    <div className="">
                        <NavLink to="/" className="text-xl uppercase Sitelogo">
                            {/* <img src={siteLogo} className="w-40" alt="" /> */}
                            <h1 className="text-3xl font-Merriweather">next estate</h1>
                        </NavLink>

                        {/* admin routes  */}
                        {
                            role === "admin" && <>
                                <li><NavLink to="/dashboard/adminhome">Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageproperties">Manage Properties</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/managereviews">Manage reviews</NavLink></li>
                            </>
                        }

                        {/* agent routes */}
                        {
                            role === "agent" && <>
                                <li><NavLink to="/dashboard/addproperty">Add Property</NavLink></li>
                                <li><NavLink to="/dashboard/myaddedproperties">My added properties</NavLink></li>
                                <li><NavLink to="/dashboard/updateproperties/:id">My sold properties</NavLink></li>
                                <li><NavLink to="/dashboard/soldproperties">My sold properties</NavLink></li>
                                <li><NavLink to="/dashboard/myreviews">Requested properties</NavLink></li>
                            </>
                        }

                        {/* guest routes  */}
                        {
                            role === "guest" && <>
                                <li><NavLink to="/dashboard/wishlist">Wishlist</NavLink></li>
                                <li><NavLink to="/dashboard/propertybought">Property Bought</NavLink></li>
                                <li><NavLink to="/dashboard/myreviews">My Reviews</NavLink></li>
                            </>
                        }
                    </div>
                    <div className="">
                        <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                        <li><Link onClick={() => {
                            logOut()
                        }}><a>Logout</a></Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;