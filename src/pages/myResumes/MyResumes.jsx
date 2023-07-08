import { Box, Paper, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllResumes,
  removeResume,
} from "../../state/actionCreators/resumeActions";

const MyResumes = () => {
  const allResumes = useSelector((state) => state.resumes.allResumes);
  const dispatch = useDispatch();

  console.log(allResumes);

  return (
    <>
      {allResumes.length === 0 ? (
        <Box
          sx={{
            width: "100%",
            padding: "50px",
            backgroundColor: "#b5b5b5",
            mt: "50px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            There is no resume
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              mt: "30px",
              mb: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              placeItems: "center",
            }}
          >
            {allResumes.map((resume, index) => (
              <Paper
                key={index}
                sx={{ display: "flex", minWidth: "350px", p: "20px" }}
              >
                <Box sx={{ borderRight: "1px solid gray" }}>
                  <img
                    src={resume.personalDetails.image}
                    alt=""
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ pl: "20px", width: "100%" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#2a79f7",
                    }}
                  >
                    {resume.personalDetails.firstName}{" "}
                    {resume.personalDetails.lastName}
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {resume.personalDetails.email}
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {resume.personalDetails.mobile}
                  </Typography>

                  <Box
                    sx={{
                      mt: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <DeleteOutline
                      sx={{ cursor: "pointer", color: "red" }}
                      onClick={() => dispatch(removeResume(resume.id))}
                    />
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="error"
              variant="contained"
              onClick={() => dispatch(removeAllResumes())}
            >
              Delete All
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default MyResumes;
