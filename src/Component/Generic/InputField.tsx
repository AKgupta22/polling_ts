import React from "react";
import TextField from "@mui/material/TextField";
import { inputProps } from "../../TypeScript/tsConfig";

export default function InputField({ handleChange, number}: inputProps) { 
  return (
    <>
      <TextField
        onChange={(e) => handleChange(e)}
        id="outlined-option1-input"
        label={`Option ${number}`}
        type="text"
        autoComplete={`current-option${number}`}
        placeholder={`Enter poll option ${number}`}
        name={`option${number}`}
        defaultValue=''
        required
      />
    </>
  );
}
React.memo(InputField);
