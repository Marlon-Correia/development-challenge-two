import React from "react";
import TextField from "@mui/material/TextField";

const Field = ({ id, label, type, placeholder, onchange, value }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={id}
      label={label}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
      fullWidth
      variant="standard"
    />
  );
};

export default Field;
