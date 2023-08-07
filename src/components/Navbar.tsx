import React, { useEffect, useState } from 'react';
import {
  Navbar, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Col, Row,
  Modal, ModalBody
} from 'reactstrap';
import logo from '../assets/images/logo.png';

const ZeallyNavbar: React.FC = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Create an account');

  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);


  const updateButtonText = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setButtonText('☰');
    } else {
      setButtonText('Create an account');
    }
  };

  const toggleModal = () => {
    if (window.innerWidth < 768) {
      setModalOpen(!modalOpen);
    }
  };

  const handleMouseEnterDropdown1 = () => setDropdown1Open(true);
  const handleMouseLeaveDropdown1 = () => setDropdown1Open(false);
  const handleMouseEnterDropdown2 = () => setDropdown2Open(true);
  const handleMouseLeaveDropdown2 = () => setDropdown2Open(false);

  useEffect(() => {
    updateButtonText();
    window.addEventListener('resize', updateButtonText);
    return () => {
      window.removeEventListener('resize', updateButtonText);
    };
  }, []);

  // Event handlers for hovering

  return (
    <>
      <Navbar color="" expand="md">
        <Row className="w-100 p-3">
          <Col xs="auto" className='m-1'>
            <img src={logo} alt="Logo" />
          </Col>
          <Col className='second-div'>
            <Nav className="mr-auto" navbar>
              <div className="d-flex align-items-center">
                {/* Use onMouseEnter and onMouseLeave event handlers */}
                <Dropdown nav isOpen={dropdown1Open} toggle={toggleDropdown1} onMouseEnter={handleMouseEnterDropdown1} onMouseLeave={handleMouseLeaveDropdown1}>
                  <DropdownToggle nav caret>
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <a href="/">
                        <p>About</p>
                        <span>Learn more about zealy</span>
                      </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/">
                        <p>Media Kit</p>
                        <span>Learn more about zealy</span>
                      </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/">
                        <p>Careers</p>
                        <span>Learn more about zealy</span>
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                {/* Use onMouseEnter and onMouseLeave event handlers */}
                <Dropdown nav isOpen={dropdown2Open} toggle={toggleDropdown2} onMouseEnter={handleMouseEnterDropdown2} onMouseLeave={handleMouseLeaveDropdown2}>
                  <DropdownToggle nav caret>
                    Company
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Option A</DropdownItem>
                    <DropdownItem>Option B</DropdownItem>
                    <DropdownItem>Option C</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavLink href="#">Changelog</NavLink>
              </div>
            </Nav>
          </Col>
          <Col xs="auto" className='third-div'>
            <Nav navbar>
              <NavItem className='m-1'>
                <NavLink href="#">Create a community</NavLink>
              </NavItem>
              <NavItem className='m-1'>
                <Button className='login-button' color="secondary">Login</Button>
              </NavItem>
              <NavItem className='m-1'>
                <Button className='' color="light" onClick={toggleModal}>{buttonText}</Button>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Navbar>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody>
          <div className='nav-modal-links'>
            <Row>
              <a href="/">Create a community</a>
            </Row>
            <Row>
              <a href="/">Community</a>
            </Row>
            <Row>
              <a href="/">Help Center</a>
            </Row>
            <Row>
              <a href="/">Events</a>
            </Row>
            <Row>
              <a href="/">Blogs</a>
            </Row>
            <Row>
              <a href="/">About</a>
            </Row>
            <Row>
              <a href="/">Careers</a>
            </Row>
            <Row>
              <a href="/">Mediakit</a>
            </Row>
          </div>
          <hr></hr>
          <Row className='nav-modal-buttons'>
            <Col>
              <Button className='login-button' color="secondary">Login</Button>
            </Col>
            <Col>
              <Button className='' color="light">Create an account</Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ZeallyNavbar;
