import React from "react";

import Footer from "../components/Footer";
import ZeallyNavbar from "../components/Navbar";
import ShapeFuture from "../components/ShapeFuture";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Changelog() {
  return (
    <div className="changelog home explore-parent">
      <div className="navbar-parent">
        <ZeallyNavbar />
      </div>
      <div className="changelog-header text-center">
        <p>CHANGELOG</p>
        <h1>WHAT'S NEW</h1>
        <h6>New updates and improvements to Zealy</h6>
        <Link className="post-link" to="/changelog">
          Follow us on Twitter
        </Link>
        <Link className="post-link" to="/changelog">
          Read our docs
        </Link>
      </div>
      <hr className="text-light"></hr>
      <div className="changelog-post text-start my-5">
        <p className="date text-secondary m-0">Jul 21, 2023</p>
        <div className="post-content">
          <Row className="">
            <Col md="6" className="m-auto ">
              <img
                src="https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/ai-summary.jpg"
                alt=""
                className="rounded-4 img-fluid "
              />
              <h1 className="text-white mt-4">AI response summary</h1>
              <p className="text-white-50">
                Some of you have mentioned the difficulty of getting an overview
                of feedback as your community grows. We've heard you and are
                excited to introduce our new AI response summary feature! Get
                actionable insights from your community members within seconds.
              </p>
              <p className="text-white-50">Available to premium communities!</p>
              <video width="100%" className="rounded-4" autoPlay muted loop>
                <source
                  src="https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/ai-summary.mp4"
                  type="video/mp4"
                />
              </video>
              <h1 className="text-white mt-4">Configure invites condition</h1>
              <p className="text-white-50">
                We've listened to your feedback and made a wave of upgrades to
                our invite system. Say goodbye to the one-quest limit. With our
                new system, you get to define the XP needed for an invite to
                count, giving you more control and ensuring quality over
                quantity.
              </p>
              <p className="text-white-50">
                Ever wondered about the status of your invites or wanted to see
                the users someone has invited? Now, you can inspect all invites
                directly from a user's profile, and easily distinguish between
                those that have been counted, not counted, or even consumed.
              </p>
              <p className="text-white-50">
                And here's the best part - our new system is fully compatible
                with recurring quests! Now, claiming will consume the invite,
                paving the way for seamless recurring quests. Dive into the
                world of our improved invites system and experience quality,
                clarity, and control like never before.
              </p>
              <p className="text-white-50">Available to premium communities!</p>
              <img
                src="https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/invite-preview.webp"
                alt=""
                className="rounded-4 img-fluid "
              />
              <h1 className="text-white mt-4">Other fixes & improvements</h1>
                <p className="text-white-50"><i className="fa-solid fa-minus me-2 " style={{color: '#E34BA9'}}></i> Fixing NFT reward status when they are all claimed</p>
                <p className="text-white-50"><i className="fa-solid fa-minus me-2 " style={{color: '#E34BA9'}}></i> Fix bug when deleting user when user name is not set</p>
                <p className="text-white-50"><i className="fa-solid fa-minus me-2 " style={{color: '#E34BA9'}}></i> Fix updating Twitter followers count on communities</p>
            </Col>
          </Row>
        </div>
      </div>
      <ShapeFuture />
      <Footer />
    </div>
  );
}

export default Changelog;
