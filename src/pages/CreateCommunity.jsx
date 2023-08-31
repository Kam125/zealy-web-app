import React, { useState } from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { createCommunity } from "../redux/slices/communitySlice";

function CreateCommunity() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [logo, setLogo] = useState(null);

  const dispatch = useDispatch();

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setLogo(selectedFile);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleCreateCommunity = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('blockchain', blockchain);
    formData.append('logo', logo);
  
    dispatch(createCommunity(formData));
  };

  return (
    <div className="create-community">
      <div className="create-community-content text-start">
        <h3>Let's create your community together Иван Иванов1.</h3>
        <p className="mb-5">
          Our users like to know more about a community before they get
          involved. Please include any information they may need.
        </p>
        <label htmlFor="fileInput">
          Logo
          <button className="d-block upload-button" onClick={handleButtonClick}>
            <i className="fa-regular fa-square-caret-up"></i>
          </button>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
        <p className="mt-2">Recommended size is 256x256px</p>
        <Label for="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of your community (mandatory)"
          required
        />
        <Label for="description" className="mt-3">
          Description
        </Label>
        <Input
          type="textarea"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="Description"
        />
        <Label for="blockchain" className="mt-3">
          Blockchain
        </Label>
        <Input
          type="select"
          id="blockchain"
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
        >
          <option value="">Select</option>
          <option value="ethereum">Ethereum</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="solana">Solana</option>
        </Input>
        <Row className="justify-content-between mt-5">
          <Col xs="4">
            <Button className="w-100">Cancel</Button>
          </Col>
          <Col xs="8">
            <Button className="w-100" onClick={handleCreateCommunity}>
              Create a community
            </Button>
          </Col>
        </Row>
      </div>
      <div className="home-wrapper">
        <Home />
      </div>
    </div>
  );
}

export default CreateCommunity;
