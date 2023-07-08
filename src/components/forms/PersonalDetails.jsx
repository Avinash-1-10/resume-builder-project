import React from "react";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import "./Form.css";
import ProfileImage from "../profileImage/ProfileImage";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nextStep } from "../../state/actionCreators/stepActions";

const PersonalDetails = ({ personalInfo, setPersonalInfo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Destructuring useForm() hook to access register, errors, and handleSubmit
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Updates the state when the input value changes
  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  // Check validation for image
  const onSubmit = (data) => {
    if (personalInfo.image == null) {
      alert("Image is not selected");
    } else {
      dispatch(nextStep());
    }
    // console.log(data);
  };

  // To proceed to the next step
  const next = () => {
    handleSubmit(onSubmit)(); // Trigger form validation before proceeding to the next step
  };

  // Go back to home page
  const backStep = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section">
        <Paper className="form-wrapper">
          <ProfileImage
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <Box className="detail-form">
            <div className="form-section">
              <TextField
                label="First Name"
                name="firstName"
                value={personalInfo.firstName}
                {...register("firstName", { required: true })}
                onChange={handleChange}
                error={errors.firstName !== undefined}
                helperText={errors.firstName && "This field is required"}
              />

              <TextField
                label="Last Name"
                name="lastName"
                value={personalInfo.lastName}
                {...register("lastName", { required: true })}
                onChange={handleChange}
                error={errors.lastName !== undefined}
                helperText={errors.lastName && "This field is required"}
              />
            </div>

            <div className="form-section">
              <TextField
                label="Email"
                name="email"
                value={personalInfo.email}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
                onChange={handleChange}
                error={errors.email !== undefined}
                helperText={errors.email && errors.email.message}
              />

              <TextField
                label="Mobile"
                name="mobile"
                value={personalInfo.mobile}
                {...register("mobile", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                onChange={handleChange}
                error={errors.mobile !== undefined}
                helperText={errors.mobile && errors.mobile.message}
              />
            </div>

            <TextField
              fullWidth
              sx={{ mb: "2rem" }}
              label="Address"
              name="address"
              value={personalInfo.address}
              {...register("address", { required: true })}
              onChange={handleChange}
              error={errors.address !== undefined}
              helperText={errors.address && "This field is required"}
            />

            <div className="form-section">
              <TextField
                label="City"
                name="city"
                value={personalInfo.city}
                {...register("city", { required: true })}
                onChange={handleChange}
                error={errors.city !== undefined}
                helperText={errors.city && "This field is required"}
              />

              <TextField
                label="State"
                name="state"
                value={personalInfo.state}
                {...register("state", { required: true })}
                onChange={handleChange}
                error={errors.state !== undefined}
                helperText={errors.state && "This field is required"}
              />
            </div>

            <TextField
              sx={{ mb: "2rem" }}
              className="pin"
              label="Pincode"
              name="pincode"
              value={personalInfo.pincode}
              {...register("pincode", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Enter a valid 6-digit pincode",
                },
              })}
              onChange={handleChange}
              error={errors.pincode !== undefined}
              helperText={errors.pincode && errors.pincode.message}
            />

            <TextField
              fullWidth
              sx={{ mb: "2rem" }}
              multiline
              rows={4}
              label="Objectives"
              name="objectives"
              value={personalInfo.objectives}
              {...register("objectives", { required: true })}
              onChange={handleChange}
              error={errors.objectives !== undefined}
              helperText={errors.objectives && "This field is required"}
            />
          </Box>
          <Divider />
          <div className="buttons-container">
            <Button variant="outlined" onClick={backStep}>
              Back
            </Button>
            <Button variant="contained" onClick={next}>
              Next
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default PersonalDetails;
