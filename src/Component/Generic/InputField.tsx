import React from "react";
import TextField from "@mui/material/TextField";
import { InputProps } from "../../TypeScript/tsConfig";

export default function InputField({ handleChange, number}: InputProps) { 
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
