import React, { useState } from 'react'
import { Button, Col, Input, InputGroup, Row } from 'reactstrap'
import logo from '../assets/images/logoWelcome.png'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";


function Login() {
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e=> {
        e.preventDefault();
        const payload = {email: email1, password: password1};
        console.log(payload)
        dispatch(
          login({
            payload,
            onSuccess: () => {
              Navigate("/");
            setPassword1("");
            setEmail1("");
            },
          })
        );
    });
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
                                    value={email1}
                                    onChange={(e) => setEmail1(e.target.value)}
                                    required
                                />
                            </InputGroup>
                            <label className='mt-4' htmlFor="password">Password</label>
                            <InputGroup>
                                <Input
                                    type="password"
                                    placeholder=""
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
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