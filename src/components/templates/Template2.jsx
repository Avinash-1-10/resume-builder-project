import React, { useState } from "react";
import { Typography, Box, Button, TextField, Paper } from "@mui/material";
import "./Template.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import Template1pdf from "../PDFs/Template1pdf";
import Template2pdf from "../PDFs/Template2pdf";
import { useDispatch } from "react-redux";
import { backStep } from "../../state/actionCreators/stepActions";
import { addResume } from "../../state/actionCreators/resumeActions";
import { data } from "../../data/userData";
import Success from "../Success";

const style = {
  TempTitle: {
    fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
    fontWeight: "bold",
    mt: "1em",
    mb: "0.5em",
    color: "#fc1e5d",
  },
  Text: {
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1.1rem",
    },
  },
  Name: {
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1.1rem",
    },
    fontWeight: "bold",
  },
};

const Template2 = ({ userDetails }) => {
  // console.log("this is userDetails", userDetails);
  const dispatch = useDispatch();
  const resume = userDetails || data;

  const [fileName, setFileName] = useState(null);
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    dispatch(addResume(userDetails));
    setSuccess(true)
  };

  return (
    <div className="template-wrapper">
      <Success success={success} setSuccess={setSuccess}/>
      <Paper className="template-content">
        <div
          className="template-container"
          style={{ borderBottom: "2px solid black", color: "#fc1e5d" }}
        >
          <div>
            <img src={resume.personalDetails.image} alt="" />
            <Typography sx={style.Name}>
              {resume.personalDetails.firstName}{" "}
              {resume.personalDetails.lastName}
            </Typography>
          </div>

          <div className="adress">
            <div className="template-p">
              <Typography>
                {resume.personalDetails.email}, {resume.personalDetails.mobile}
              </Typography>
            </div>
            <div className="template-p">
              <Typography>{resume.personalDetails.address}</Typography>
            </div>
            <div className="template-p">
              <Typography>
                {resume.personalDetails.pincode}, {resume.personalDetails.state}
              </Typography>
            </div>
          </div>
        </div>

        <div className="template-container">
          <div className="template-box">
            <div sx={{ mt: "10px" }} className="template-p">
              <Typography sx={style.TempTitle}>Objectives</Typography>
              <Typography sx={style.Text}>
                {resume.personalDetails.objectives}
              </Typography>
            </div>
          </div>
        </div>

        <div className="template-container">
          <Box>
            <Typography sx={style.TempTitle}>Education Details</Typography>

            {/* Education Details */}

            <Box sx={{ mb: "10px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
                  color: "green",
                }}
              >
                {resume.educationDetails.type}
              </Typography>
              <div className="template-box">
                <Typography sx={style.Text} className="template-p">
                  {resume.educationDetails.degree} (
                  {resume.educationDetails.startYear} -{" "}
                  {resume.educationDetails.endYear})
                </Typography>
                <Typography sx={style.Text} className="template-p">
                  {resume.educationDetails.university}
                </Typography>
              </div>
            </Box>
          </Box>
        </div>

        {/* work experience */}

        <div className="template-container">
          <Box>
            <Typography sx={style.TempTitle}>Work Experience</Typography>

            {resume.workDetails.map((work, index) => (
              <div className="template-box" key={`${index}-${work.id}`}>
                <Typography sx={style.Text} className="template-p">
                  {work.jobTitle} ({work.startYear} - {work.endYear})
                </Typography>
                <Typography sx={style.Text} className="template-p">
                  {work.orgName}
                </Typography>
              </div>
            ))}
          </Box>
        </div>

        {/* Skills */}

        <div className="template-container">
          <div>
            <Typography sx={style.TempTitle}>Skills</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", mb: "10px" }}>
              {resume.skillDetails.map((skills, index) => (
                <Box sx={{ mr: "1em", mb: "0.5em" }} key={index}>
                  <Typography sx={style.Text} className="template-p">
                    {skills.skill}
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>
        </div>

        {/* Skills finished */}
      </Paper>
      <div style={{ marginTop: "50px" }}>
      <h3>Create File Name</h3>
        <TextField
          sx={{ width: "300px" }}
          label="File Name"
          onChange={(e) => setFileName(e.target.value)}
          placeholder="resume.pdf"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            marginBottom:"30px",
          }}
        >
          <Button variant="outlined" onClick={() => dispatch(backStep())}>
            Back
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            <PDFDownloadLink
              document={<Template2pdf resume={resume} />}
              fileName={fileName === null ? "resume.pdf" : `${fileName}.pdf`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Save"
              }
            </PDFDownloadLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Template2;
