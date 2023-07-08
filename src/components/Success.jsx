import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import successImg from "../images/successImg.png"

export default function Success({ success, setSuccess }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setSuccess(false);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dialog
        open={success}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
        PaperProps={{
          sx: {
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <img
          src={successImg}
          alt=""
          style={{ width: "20%", marginTop:"30px" }}
        />
        <DialogTitle id="alert-dialog-title" sx={{textAlign:"center"}}>
          Your Resume has been Successfully Saved
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Go To HOME
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
