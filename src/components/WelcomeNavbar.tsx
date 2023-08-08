import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function WelcomeNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <div className='welcome-navbar'>
            <div className='d-flex align-items-center justify-content-between nav-top'>
                <p className='m-0'>Welcome to Zealy</p>
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                        <Button>...</Button>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Website</DropdownItem>
                        <DropdownItem>Discord</DropdownItem>
                        <DropdownItem>Invite Friends</DropdownItem>
                        <DropdownItem divider /> {/* Add a divider */}
                        <div className="dropdown-footer">
                            <DropdownItem>Website</DropdownItem>
                            <DropdownItem>Discord</DropdownItem>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Link to='/welcome/quests'>
                <div className='nav-link nav-link-quests'>
                    <i className="fa-solid fa-map me-3"></i>
                    <span>Quests</span>
                </div>
            </Link>
            <Link to='/welcome/leaderboard'>
                <div className='nav-link nav-link-leaderboard'>
                    <i className="fa-solid fa-chart-simple me-3"></i>
                    <span>Leaderboard</span>
                </div>
            </Link>
            <div className='nav-link'>
                <i className="fa-solid fa-envelope me-3"></i>
                <span>Invite Friends</span>
            </div>
        </div>
    )
}

export default WelcomeNavbar