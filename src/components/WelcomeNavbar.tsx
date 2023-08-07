import React from 'react'

function WelcomeNavbar() {
    return (
        <div className='welcome-navbar'>
            {/* <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/5d67cdf1-9abe-4d1b-afba-ce9bf016493f-profile.png' alt='' /> */}
            <div className='d-flex align-items-center justify-content-between nav-top'>
                <p>Welcome to Zealy</p>
                <p>...</p>
            </div>
            <div className='nav-link'>
                <i className="fa-solid fa-map me-3"></i>
                <span>Quests</span>
            </div>
            <div className='nav-link'>
                <i className="fa-solid fa-chart-simple me-3"></i>
                <span>Leaderboard</span>
            </div>
            <div className='nav-link'>
                <i className="fa-solid fa-envelope me-3"></i>
                <span>Invite Friends</span>
            </div>
        </div>
    )
}

export default WelcomeNavbar