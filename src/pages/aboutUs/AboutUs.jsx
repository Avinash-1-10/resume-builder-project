import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Twitter,
  Email,
} from "@mui/icons-material";
import "./AboutUs.css";
import ResumeSvg from "../../images/resumeAboutUs.svg";

const AboutUs = () => {
  return (
    <>
      <h1 className="aboutUs-heading">Resume Builder</h1>
      <div className="aboutUs">
        <div className="aboutUse-info">
          <Typography sx={{ textAlign: "justify" }}>
            Welcome to our Resume Builder App, your one-stop solution for
            creating professional and captivating resumes effortlessly. At{" "}
            <b style={{ color: "red" }}>Resumake</b>, we understand the
            importance of a well-crafted resume in today's competitive job
            market. We are dedicated to empowering individuals like you to
            present their skills, experience, and achievements in the most
            effective and impressive way possible. Our team of experts,
            passionate about career development and human resources, has
            carefully designed this app to simplify the resume creation process.
            Whether you're a seasoned professional looking for a career change
            or a fresh graduate stepping into the job market, our app is
            tailored to meet your unique needs. With our user-friendly interface
            and intuitive design, you can create a polished and personalized
            resume in a matter of minutes. Our wide range of professionally
            designed templates ensures that you have the freedom to choose a
            layout that best suits your industry and personal style.
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mt: "20px" }}>
            Share with Your friends
          </Typography>
          <Box
            sx={{ display: "flex", gap: "20px", mt: "10px", cursor: "pointer" }}
          >
            <Facebook sx={{ color: "#4267B2" }} />
            <Instagram sx={{ color: "#E1306C" }} />
            <WhatsApp sx={{ color: "#25D366" }} />
            <Twitter sx={{ color: "#1DA1F2" }} />
            <Email sx={{ color: "#F4B400" }} />
          </Box>
        </div>

        <div className="aboutUs-Image">
          <img src={ResumeSvg} alt="" className="aboutUs-svg" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
