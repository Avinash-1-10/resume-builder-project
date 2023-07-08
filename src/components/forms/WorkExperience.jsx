import React, { useState } from "react";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import "./Form.css";
import { useDispatch } from "react-redux";
import { backStep, nextStep } from "../../state/actionCreators/stepActions";

const WorkExperience = ({ workInfo, setWorkInfo }) => {
  // Dispatch function from react-redux
  const dispatch = useDispatch();

  // State for storing form validation errors
  const [errors, setErrors] = useState([]);

  // Function to validate the form and proceed to the next step
  const validateForm = () => {
    const newErrors = [];

    // Iterate over each work experience entry
    workInfo.forEach((work, index) => {
      const error = {};

      // Validate job title
      if (!work.jobTitle) {
        error.jobTitle = "Job title is required";
      }

      // Validate organization name
      if (!work.orgName) {
        error.orgName = "Organization name is required";
      }

      // Validate start year
      if (!work.startYear) {
        error.startYear = "Start year is required";
      } else if (!/^\d{4}$/.test(work.startYear)) {
        error.startYear = "Start year should be a 4-digit number";
      }

      // Validate end year
      if (!work.endYear) {
        error.endYear = "End year is required";
      } else if (!/^\d{4}$/.test(work.endYear)) {
        error.endYear = "End year should be a 4-digit number";
      }
      newErrors[index] = error;
    });

    setErrors(newErrors);

    // Check if there are no errors
    if (newErrors.every((error) => Object.keys(error).length === 0)) {
      dispatch(nextStep());
      // console.log(workInfo);
    }
  };

  // Handle input change for work experience details
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedWorkInfo = [...workInfo];
    updatedWorkInfo[index] = {
      ...updatedWorkInfo[index],
      [name]: value,
    };
    setWorkInfo(updatedWorkInfo);
  };

  // To add new Work experience Entry
  const handleAddNew = () => {
    setWorkInfo([
      ...workInfo,
      { jobTitle: "", orgName: "", startYear: "", endYear: "" },
    ]);
  };

  // To remove last added work experience entry
  const handleRemove = () => {
    setWorkInfo(workInfo.slice(0, -1));
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section">
        <Paper className="form-wrapper">
          <Box className="detail-form">
            <h3>Work Experience</h3>
            {workInfo.map((work, index) => (
              <div key={index}>
                <h4>Experience {index + 1}</h4>
                <Divider sx={{ mb: "2rem" }} />
                <div className="form-section">
                  <TextField
                    label="Job Title"
                    name="jobTitle"
                    value={work.jobTitle}
                    onChange={(event) => handleChange(index, event)}
                    error={errors[index]?.jobTitle !== undefined}
                    helperText={errors[index]?.jobTitle}
                  />
                  <TextField
                    label="Organization Name"
                    name="orgName"
                    value={work.orgName}
                    onChange={(event) => handleChange(index, event)}
                    error={errors[index]?.orgName !== undefined}
                    helperText={errors[index]?.orgName}
                  />
                </div>
                <div className="form-section">
                  <TextField
                    label="Start Year"
                    name="startYear"
                    value={work.startYear}
                    onChange={(event) => handleChange(index, event)}
                    error={errors[index]?.startYear !== undefined}
                    helperText={errors[index]?.startYear}
                  />
                  <TextField
                    label="End Year"
                    name="endYear"
                    value={work.endYear}
                    onChange={(event) => handleChange(index, event)}
                    error={errors[index]?.endYear !== undefined}
                    helperText={errors[index]?.endYear}
                  />
                </div>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                wrap: "flex-wrap",
              }}
            >
              {/* Add new work experience entry button */}
              <Button color="primary" onClick={handleAddNew}>
                Add new
              </Button>

              {/* Remove last work experience entry button */}
              {workInfo.length > 1 && (
                <Button color="secondary" onClick={handleRemove}>
                  Remove
                </Button>
              )}
            </div>
          </Box>
          <Divider />
          <div className="buttons-container">
            {/* Back Step Button */}
            <Button variant="outlined" onClick={() => dispatch(backStep())}>
              Back
            </Button>

            {/* Next Step Button */}
            <Button variant="contained" onClick={validateForm}>
              Next
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default WorkExperience;
