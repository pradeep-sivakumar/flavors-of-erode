import React from "react";
import "./footer.css";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      <Typography variant="body1" gutterBottom>
        Copyright All Rights Reserved © {year}.{" "}
      </Typography>
    </div>
  );
};

export default Copyright;
