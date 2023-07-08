import React, { useRef, useState } from "react";
import "./ProfileImage.css";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
} from "@mui/material";
import AvatarEditor from "react-avatar-editor";

const ProfileImage = ({ personalInfo, setPersonalInfo }) => {
  // Ref for file input element
  const fileInputRef = useRef();

  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);

  // State for zoom level
  const [zoom, setZoom] = useState(1);

  // State for the edited image
  const [editedImage, setEditedImage] = useState(null);

  // Ref for AvatarEditor component
  const editorRef = useRef();

  // Handle button click to trigger file input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file change when a new image is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    // Update personalInfo state with the new image URL
    setPersonalInfo((prevState) => ({
      ...prevState,
      image: imageUrl,
    }));

    // Open the dialog
    setDialogOpen(true);
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // Handle zoom change
  const handleZoomChange = (event, value) => {
    setZoom(value);
  };

  // Handle save button click
  const handleSave = () => {
    if (editorRef.current) {
      // Get the edited image as a canvas data URL
      const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();

      // Update personalInfo state with the edited image URL
      setPersonalInfo((prevState) => ({
        ...prevState,
        image: canvas,
      }));

      // Set the editedImage state
      setEditedImage(canvas);

      // Close the dialog
      setDialogOpen(false);
    }
  };

  return (
    <div className="profileImg">
      {/* Hidden file input element */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Display the current image as an Avatar */}
      <Avatar src={personalInfo.image} sx={{ width: 90, height: 90 }} />

      {/* Button to trigger file input */}
      <Button onClick={handleButtonClick}>Upload Image</Button>

      {/* Dialog for image editing */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          {/* Display the AvatarEditor component */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AvatarEditor
              ref={editorRef}
              image={personalInfo.image}
              width={250}
              height={250}
              border={50}
              borderRadius={250}
              color={[255, 255, 255, 0.6]}
              scale={zoom}
              rotate={0}
            />
          </div>

          {/* Slider for zoom control */}
          <Slider
            value={zoom}
            min={1}
            max={2}
            step={0.1}
            onChange={handleZoomChange}
            aria-label="Zoom"
            valueLabelDisplay="auto"
          />
        </DialogContent>

        {/* Dialog actions */}
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileImage;
