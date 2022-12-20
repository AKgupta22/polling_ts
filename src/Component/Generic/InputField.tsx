import React from "react";
import TextField from "@mui/material/TextField";
import { inputeProps } from "../../TypeScript/tsConfig";

export default function InputField({ handleChange, number, data }:inputeProps) {
  
  return (
    <>
      <TextField
        onChange={handleChange}
        id="outlined-option1-input"
        label={`Option ${number}`}
        type="text"
        autoComplete={`current-option${number}`}
        placeholder={`Enter poll option ${number}`}
        name={`option${number}`}
        defaultValue={data[`option${number}`]}
        required
      />
    </>
  );
}
React.memo(InputField);
