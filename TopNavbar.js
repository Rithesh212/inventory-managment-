// src/components/TopNavbar.js
import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/TopNavbar.css';

function TopNavbar({ onToggleSidebar, username, profileImageUrl }) {
    return (
        <div className="top-navbar">
            <div className="hamburger-icon" onClick={onToggleSidebar}>
                <FaBars />
            </div>
            <div className="profile-section">
                <span className="username">{username}</span>
                <img src={profileImageUrl} alt="Profile" className="profile-icon" />
            </div>
        </div>
    );
}

export default TopNavbar;
