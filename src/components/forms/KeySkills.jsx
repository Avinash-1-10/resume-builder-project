import React from "react";
import "./Form.css";
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { useForm } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux";
import { backStep, nextStep } from "../../state/actionCreators/stepActions";

const schema = yup.object().shape({
  skills: yup.array().of(
    yup.object().shape({
      skill: yup.string().required("Skill is required"), 
    })
  ),
});

const KeySkills = ({skills, setSkills }) => {

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleChange = (index, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index].skill = event.target.value;
    setSkills(updatedSkills);
  };

  const handleAddNew = () => {
    setSkills([...skills, { skill: "" }]);
  };

  const handleRemove = () => {
    setSkills(skills.slice(0, -1));
  };

  const handlePreview = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = () => {
    dispatch(nextStep());
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section">
        <Paper className="form-wrapper">
          <Box className="detail-form">
            <h3>Key Skills</h3>
            <Divider sx={{ mb: "2rem" }} />
            <div className="skill-form-section" >
            {skills.map((skill, index) => (

                <TextField
                key={index}
                  name="skill"
                  value={skill.skill}
                  // Register the field for validation
                  {...register(`skills[${index}].skill`)}
                  // Display validation error if any
                  error={!!errors.skills?.[index]?.skill}
                  helperText={errors.skills?.[index]?.skill?.message}
                  onChange={(event) => handleChange(index, event)}
                />
            ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                wrap: "flex-wrap",
              }}
            >
              <Button color="primary" onClick={handleAddNew}>
                Add new
              </Button>
              {skills.length > 1 && (
                <Button color="secondary" onClick={handleRemove}>
                  Remove
                </Button>
              )}
            </div>
          </Box>
          <Divider />
          <div className="buttons-container">
            <Button variant="outlined" onClick={()=>dispatch(backStep())}>
              Back
            </Button>
            <Button variant="contained" onClick={handlePreview}>
              Preview
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default KeySkills;
