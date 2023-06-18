import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import { useContext, useRef, useState } from "react";
import DataTable from "react-data-table-component";

import "./Result.scss";
import { CandidateContext } from "../../contexts/CandidateContext";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const { setCandidateData } = useContext(CandidateContext);

  const nameRef = useRef();
  const noteRef = useRef();
  const [state, setState] = useState();

  function handleSubmitCv() {
    const name = nameRef.current.value;
    const note = noteRef.current.value;

    setCandidateData((prev) => [
      ...prev.filter((d) => d.name != name),
      { ...prev.find((d) => d.name == name), note, state },
    ]);

    navigate("/thanks-for-upload-cv");
  }

  return (
    <div className="uploadCV__container">
      <h1>Candidate Assessment</h1>
      <form>
        <FormControl fullWidth margin="normal">
          <TextField inputRef={nameRef} required label={"Name"} fullWidth />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            inputRef={noteRef}
            required
            multiline
            label={"Note"}
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Choose state"
            value={state}
            label="State"
            onChange={(e) => setState(e.target.value)}
          >
            <MenuItem value={"Male"}>Accept</MenuItem>
            <MenuItem value={"Female"}>Reject</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={handleSubmitCv}
          variant="contained"
          fullWidth
          sx={{ marginTop: 4 }}
        >
          Create
        </Button>
      </form>
    </div>
  );
}
