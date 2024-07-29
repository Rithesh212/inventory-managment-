// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
                <li><NavLink to="/inventory-tracking" className={({ isActive }) => isActive ? 'active' : ''}>Inventory Tracking</NavLink></li>
                <li><NavLink to="/product-info-management" className={({ isActive }) => isActive ? 'active' : ''}>Product Info</NavLink></li>
                <li><NavLink to="/order-management" className={({ isActive }) => isActive ? 'active' : ''}>Order Management</NavLink></li>
                <li><NavLink to="/stock-movement" className={({ isActive }) => isActive ? 'active' : ''}>Stock Movement</NavLink></li>
                <li><NavLink to="/reorder-management" className={({ isActive }) => isActive ? 'active' : ''}>Reorder Management</NavLink></li>
                <li><NavLink to="/reporting-analytics" className={({ isActive }) => isActive ? 'active' : ''}>Reporting & Analytics</NavLink></li>
                <li><NavLink to="/user-access-control" className={({ isActive }) => isActive ? 'active' : ''}>User Access</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
