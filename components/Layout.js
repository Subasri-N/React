import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <nav>
                    <ul>
                        <li><Link to="/dashboard/services">Service Listings</Link></li>
                        <li><Link to="/dashboard/bookings">Booking Form</Link></li>
                        <li><Link to="/dashboard/orders">Order Tracking</Link></li>
                        <li><Link to="/dashboard/notifications">Notifications</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
