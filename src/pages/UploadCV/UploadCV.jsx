import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import "./UploadCV.scss";
import { Select } from "antd";
import React from "react";
import { FileDownload } from "@mui/icons-material";

export default function UploadCV() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="uploadCV__container">
      <h1>Upload your CV now!</h1>
      <form>
        <FormControl fullWidth margin="normal">
          <TextField required label={"Name"} fullWidth />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField required label={"Email"} fullWidth />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField required label={"Apply position"} fullWidth />
        </FormControl>
        <Box margin="normal">
            <Button variant="outlined">Upload CV</Button>
        </Box>
      </form>
    </div>
  );
}
