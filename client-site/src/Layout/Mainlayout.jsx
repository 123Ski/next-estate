import React from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';

import UseAuth from '../hooks/useAuth';

import useRole from '../hooks/useRole';
 
const Dashboard = () => {

    const [role] = useRole(); // Custom hook for role management

    const { user, logOut } = UseAuth(); // Custom hook for authentication
 
    return (
<div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col">

                {/* Page content */}
<div className="flex justify-end items-center">
<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
</div>
<Outlet /> {/* Render nested routes */}
</div>
 
            <div className="drawer-side">
<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
<ul className="menu p-4 w-80 min-h-full font-medium font-Roboto bg-base-200 pb-16 capitalize text-base-content flex flex-col justify-between text-lg">
<div>
<NavLink to="/" className="text-xl uppercase Sitelogo">

                            {/* Logo or Title */}
<h1 className="text-3xl font-Merriweather mb-5">Next Estate</h1>
</NavLink>
 
                        {/* Admin Routes */}

                        {role === "admin" && (
<>
<li><NavLink to="/dashboard/manageproperties">Manage Properties</NavLink></li>
<li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>
<li><NavLink to="/dashboard/managereviews">Manage Reviews</NavLink></li>
</>

                        )}
 
                        {/* Agent Routes */}

                        {role === "agent" && (
<>
<li><NavLink to="/dashboard/addproperty">Add Property</NavLink></li>
<li><NavLink to="/dashboard/myaddedproperties">My Added Properties</NavLink></li>
<li><NavLink to="/dashboard/mysoldproperties">My Sold Properties</NavLink></li>
<li><NavLink to="/dashboard/offeredproperties">Requested Properties</NavLink></li>
</>

                        )}
 
                        {/* Guest Routes */}

                        {role === "guest" && (
<>
<li><NavLink to="/dashboard/wishlist">Wishlist</NavLink></li>
<li><NavLink to="/dashboard/propertybought">Property Bought</NavLink></li>
<li><NavLink to="/dashboard/myreviews">My Reviews</NavLink></li>
</>

                        )}
</div>
 
                    <div>
<li><NavLink to="/dashboard/profile">Profile</NavLink></li>
<li>
<Link onClick={() => logOut()}>Logout</Link>
</li>
</div>
</ul>
</div>
</div>

    );

};
 
export default Dashboard;
 
