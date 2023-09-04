import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ZeallyNavbar from "../components/Navbar";
import { ButtonGroup, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PrimaryCard from "../components/PrimaryCard";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunities,
  updateCommunity,
} from "../redux/slices/communitySlice";

function Explore() {
  const [rSelected, setRSelected] = useState(1);
  let [like, setLike]= useState(0);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.community);
  useEffect(() => {
    const payload = { offset: 0, limit: 100 };
    dispatch(getAllCommunities(payload));
  }, [like]);
  console.log(data);
  const logos = data?.map((item) => {
    const logoData = item.logo;
    const uint8Array = new Uint8Array(logoData?.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    const imgSrc = URL.createObjectURL(blob);
    return imgSrc;
  });

  return (
    <div className="explore-parent">
      <div className="navbar-parent">
        <ZeallyNavbar />
      </div>
      <div className=" explore">
        <Filters />
        <div className="explore-content text-start">
          <h2>Featured communities</h2>
          <Row className="align-items-end justify-content-between">
            <Col lg="6" md="12" className="p-0">
              <p>
                Communities selected by the Zealy team. These communities are
                quickly gathering a strong base of followers, and it's no wonder
                why - they offer intriguing opportunities for collaboration,
                networking, and learning.
              </p>
            </Col>
            <Col xs="auto" className="p-0">
              <ButtonGroup>
                <Button
                  outline
                  onClick={() => setRSelected(1)}
                  active={rSelected === 1}
                >
                  <i className="fa-solid fa-table-cells-large"></i>
                </Button>
                <Button
                  outline
                  onClick={() => setRSelected(2)}
                  active={rSelected === 2}
                >
                  <i className="fa-solid fa-bars"></i>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <div className="cards-row-container mt-5">
            {rSelected === 1 && (
              <Row className="cards-row justify-content-center">
                {data?.map((item, index) => (
                  <Col lg="4" className="p-0">
                    <Link to="/welcome/quests" className="post-link">
                      <PrimaryCard
                        key={index}
                        title={item.name}
                        text={item.description}
                        imageUrl={logos[index]}
                        links={[
                          {
                            label: "" + item.likes? item.likes: 0,
                            url: "https://example.com/link1",
                          },
                          { label: "29", url: "https://example.com/link2" },
                          { label: "185", url: "https://example.com/link3" },
                        ]}
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(
                            updateCommunity({
                              likes: item.likes+1,
                              id: item._id,
                            }),
                          );
                          setLike(like+1)
                        }}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
            {rSelected === 2 && (
              <Row className="cards-row cards-row-small justify-content-center">
                {data?.map((item, index) => (
                  <Col xs="12" className="p-0">
                    <Link to="/welcome/quests" className="post-link">
                      <PrimaryCard
                        key={index}
                        title={item.name}
                        text={item.description}
                        imageUrl={logos[index]}
                        links={[
                          { label: "", url: "https://example.com/link1" },
                          { label: "29", url: "https://example.com/link2" },
                          { label: "185", url: "https://example.com/link3" },
                        ]}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Explore;
