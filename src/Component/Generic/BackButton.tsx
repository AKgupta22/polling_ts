import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      className="custom-btn"
      onClick={() => navigate("/dashboard")}
    >
      Back to dashboard
    </Button>
  );
}
