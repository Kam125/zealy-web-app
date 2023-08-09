import React, { useState } from 'react'
import { Button, Col, Input, InputGroup, Row } from 'reactstrap'
import logo from '../assets/images/logoWelcome.png'
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Do something with the email, like sending it to the server or performing validation
        console.log('Submitted email:', email);
    };
    return (
        <div className='signup'>
            <Row className='align-items-stretch'>
                <Col lg='5' className='signup-left  p-4'>
                    <Row className='justify-content-between align-items-center'>
                        <Col xs='auto'>
                            <img src={logo} alt='' />
                        </Col>
                        <Col xs='auto'>
                            <span>First time on Zealy? </span>
                            <Link to='/signup' className='post-link'>
                                <Button>Create an account</Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className='signup-content'>
                        <div className='text-start mt-5 signup-header'>
                            <h2>Log in to Zealy</h2>
                            <p className='text-start mb-5'>Welcome back!</p>
                            <Button className='d-block'><i className="fa-brands fa-discord me-2"></i>Continue with Discord</Button>
                            <Button className='d-block'><i className="fa-solid fa-won-sign me-2" style={{ color: "#3991EE" }}></i>Continue with WalletConnect</Button>
                        </div>
                        <Row className='mt-5'>
                            <Col><hr></hr></Col>
                            <Col xs='auto'><p>OR</p></Col>
                            <Col><hr></hr></Col>
                        </Row>
                        <form onSubmit={handleSubmit} className='text-start mt-4'>
                            <label htmlFor="email">Email address</label>
                            <InputGroup>
                                <Input
                                    type="email"
                                    placeholder="kenny@zealy.io"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </InputGroup>
                            <Button type="submit">
                                Log in with Email
                            </Button>
                        </form>
                    </div>
                </Col>
                <Col className='signup-right'>
                </Col>
            </Row>
        </div>
    )
}

export default Login