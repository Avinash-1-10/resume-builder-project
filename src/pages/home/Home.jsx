import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import template1Img from "../../images/template1img.png";
import template2img from "../../images/template2img.png";
import template3img from "../../images/template3img.png";
import template4img from "../../images/template4img.png";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetStep } from "../../state/actionCreators/stepActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // To initialize steps
  useEffect(() => {
    dispatch(resetStep());
  }, [dispatch]);

  // Handle template selection
  const handleSelectTemplate = (templateId) => {
    navigate("/detail-filling", {
      state: { templateId },
    });
  };

  return (
    <>
      <h1 className="homeTitle">Templates</h1>
      <h3 style={{ textAlign: "center", marginTop: "-15px", color: "gray" }}>
        Select a Template to get Started
      </h3>
      <div className="home">
        {/* Template 1 */}
        <div className="template-card">
          <img src={template1Img} alt="" />
          <figcaption>
            <Button
              variant="contained"
              onClick={() => handleSelectTemplate("template1")}
            >
              Select Template
            </Button>
          </figcaption>
        </div>

        {/* Template 2 */}
        <div className="template-card">
          <img src={template2img} alt="" />
          <figcaption>
            <Button
              variant="contained"
              onClick={() => handleSelectTemplate("template2")}
            >
              Select Template
            </Button>
          </figcaption>
        </div>

        {/* Template 3 */}
        <div className="template-card">
          <img src={template3img} alt="" />
          <figcaption>
            <Button
              variant="contained"
              onClick={() => handleSelectTemplate("template3")}
            >
              Select Template
            </Button>
          </figcaption>
        </div>

        {/* Template 4 */}
        <div className="template-card">
          <img src={template4img} alt="" />
          <figcaption>
            <Button
              variant="contained"
              onClick={() => handleSelectTemplate("template4")}
            >
              Select Template
            </Button>
          </figcaption>
        </div>
      </div>
    </>
  );
};

export default Home;
