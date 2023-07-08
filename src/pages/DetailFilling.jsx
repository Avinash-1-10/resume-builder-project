import React, { useState } from "react";
import PersonalDetails from "../components/forms/PersonalDetails";
import EducationDetails from "../components/forms/EducationDetails";
import WorkExperience from "../components/forms/WorkExperience";
import KeySkills from "../components/forms/KeySkills";
import Preview from "./preview/Preview";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailFilling = () => {
  // To access the state passed through useNagivate hook from home.jsx
  const location = useLocation();

  // Template ID received form home component
  const templateId = location.state.templateId;
  // console.log(templateId)

  // current state
  const step = useSelector((state) => state.step.step);

  // State for personal information
  const [personalInfo, setPersonalInfo] = useState({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    objectives: "",
  });

  // State for educationsl information
  const [educationInfo, setEducationInfo] = useState({
    type: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  });

  // State for work Information
  const [workInfo, setWorkInfo] = useState([
    {
      jobTitle: "",
      orgName: "",
      startYear: "",
      endYear: "",
    },
  ]);

  // State for Skills information
  const [skills, setSkills] = useState([{ skill: "" }, { skill: "" }]);

  // combine the userDetails in one object
  const userDetails = {
    id: Math.floor(Math.random() * 10e6),
    templateId: templateId,
    personalDetails: personalInfo,
    educationDetails: educationInfo,
    workDetails: workInfo,
    skillDetails: skills,
  };

  // Logic for multistep form (conditional rendering)
  switch (step) {
    case 1:
      return (
        <PersonalDetails
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      );
    case 2:
      return (
        <EducationDetails
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      );
    case 3:
      return <WorkExperience workInfo={workInfo} setWorkInfo={setWorkInfo} />;
    case 4:
      return <KeySkills skills={skills} setSkills={setSkills} />;
    case 5:
      return (
        <Preview
          templateId={userDetails.templateId}
          userDetails={userDetails}
        />
      );
    default:
      break;
  }
};

export default DetailFilling;
