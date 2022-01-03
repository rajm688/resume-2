import * as React from "react";
import Button from "@mui/material/Button";
export function Navbar() {
  return (
    <div className="navbar">
      <h1 id="text">Rajkumar Murugesan</h1>
      <div>
      <Button
                  href="https://drive.google.com/file/d/1sAxJo9PuNuvFaAfHfJRg0QzB4xSZc0fR/view?usp=sharing"
                  target="_blank"
                  color="inherit"
                >
                  Resume
                </Button>
      </div>
    </div>
  );
}
