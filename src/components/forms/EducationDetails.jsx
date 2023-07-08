import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { backStep, nextStep } from "../../state/actionCreators/stepActions";

const EducationDetails = ({ educationInfo, setEducationInfo }) => {
  // Dispatch function from react-redux
  const dispatch = useDispatch();

  // Destructuring useForm() hook to access register, errors, and handleSubmit
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Handle input change for education details
  const handleChange = (e) => {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = (data) => {
    dispatch(nextStep()); // Dispatch nextStep action to proceed to the next step
  };

  // Handle next button click
  const next = () => {
    handleSubmit(onSubmit)(); // Trigger form validation before proceeding to the next step
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section">
        <Paper className="form-wrapper">
          <Box className="detail-form">
            <h3>Education Details</h3>
            <Divider sx={{ mb: "2rem" }} />
            <TextField
              sx={{ mb: "2rem" }}
              label="Type"
              className="pin"
              name="type"
              value={educationInfo.type}
              {...register("type", { required: true })}
              onChange={handleChange}
              error={errors.type !== undefined}
              helperText={errors.type && "This field is required"}
            />

            <div className="form-section">
              <TextField
                label="University"
                name="university"
                value={educationInfo.university}
                {...register("university", { required: true })}
                onChange={handleChange}
                error={errors.university !== undefined}
                helperText={errors.university && "This field is required"}
              />
              <TextField
                label="Degree"
                name="degree"
                value={educationInfo.degree}
                {...register("degree", { required: true })}
                onChange={handleChange}
                error={errors.degree !== undefined}
                helperText={errors.degree && "This field is required"}
              />
            </div>

            <div className="form-section">
              <TextField
                label="Start Year"
                name="startYear"
                value={educationInfo.startYear}
                {...register("startYear", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Enter a valid 4-digit year",
                  },
                })}
                onChange={handleChange}
                error={errors.startYear !== undefined}
                helperText={errors.startYear && errors.startYear.message}
              />
              <TextField
                label="End Year"
                name="endYear"
                value={educationInfo.endYear}
                {...register("endYear", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Enter a valid 4-digit year",
                  },
                })}
                onChange={handleChange}
                error={errors.endYear !== undefined}
                helperText={errors.endYear && errors.endYear.message}
              />
            </div>
          </Box>
          <Divider />
          <div className="buttons-container">
            {/* Back button */}
            <Button variant="outlined" onClick={() => dispatch(backStep())}>
              Back
            </Button>
            {/* Next Button */}
            <Button variant="contained" onClick={next}>
              Next
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default EducationDetails;
