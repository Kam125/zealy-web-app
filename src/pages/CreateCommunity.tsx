import React from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap';
import Home from './Home';

function CreateCommunity() {
    return (
        <div className='create-community'>
            <div className='create-community-content text-start'>
                <h3>Let's create your community together Иван Иванов1.</h3>
                <p className='mb-5'>Our users like to know more about a community before they get involved.
                    Please include any information they may need.
                </p>
                <Label for="fileInput">Logo
                    <Button className='d-block upload-button'>
                        <i className="fa-regular fa-square-caret-up"></i>
                    </Button>
                </Label>
                <Input type="file" id="fileInput" />
                <p className='mt-2'>Recommended size is 256x256px</p>
                <Label for="name">Name</Label>
                <Input type="text" id="name" placeholder='Name of your community (mandatory)' required />
                <Label for="description" className='mt-3'>Description</Label>
                <Input type="textarea" id="description" rows="4" placeholder='Description' />
                <Label for="blockchain" className='mt-3'>Blockchain</Label>
                <Input type="select" id="blockchain">
                    <option value="">Select</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="solana">Solana</option>
                </Input>
                <Row className='justify-content-between mt-5'>
                    <Col xs='4'>
                        <Button className='w-100'>Cancel</Button>
                    </Col>
                    <Col xs='8'>
                        <Button className='w-100'>Create a community</Button>
                    </Col>
                </Row>
            </div>
            <div className='home-wrapper'>
               
            <Home />
            </div>
        </div>
    )
}

export default CreateCommunity