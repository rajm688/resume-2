import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function About() {
  return (
    <div id="About" className="About">
      <br />
      <h1 id="link" style={{fontSize : "2.5vw"}}>Greetings,</h1>
      <p id="link" style={{fontSize : "1.5vw"}}>
        Welcome to my personal website, where you can learn everything you need
        to know about me, my profession and what makes me special as a person.
      </p>
      <h1 id="link" style={{fontSize : "2.5vw"}}>{"< Basic  Information />"}</h1>
      <p id="link"  style={{fontSize : "1.5vw"}}>Full stack Developer Based on Tamil Nadu, India.</p>
      <p id="link"  style={{fontSize : "1.5vw"}}>
        Bachelor in Electronics and Communication Engineering, Always on the
        lookout for new and exciting ways to leverage Web Development to create
        unforgettable experiences and impressions.
      </p>
      <h1 id="link" style={{fontSize : "2.5vw"}} >Languages and Libraries</h1>
      <Stack
        className="chip"
        direction="row"
        spacing={2}
        flexWrap="wrap"
        gap="10px"
      >
        <Chip label="HTML 5" />
        <Chip label="CSS 3" />
        <Chip label="JavaScript" />
        <Chip label="React.JS" />
        <Chip label="Node.JS" />
        <Chip label="REST API" />
        <Chip label="My SQL" />
        <Chip label="MongoDB" />
        <Chip label="Bootstrap" />
        <Chip label="AWS" />
        <Chip label="Material UI" />
        <Chip label="Python" variant="outlined" />
        <Chip label="Jquery" variant="outlined" />
      </Stack>
      <h1 id="link" style={{fontSize : "2.5vw"}}>Tools and Softwares</h1>
      <Stack direction="row" spacing={2} flexWrap="wrap" gap="10px">
        <Chip label="VS Code" />
        <Chip label="Git" />
        <Chip label="Git Hub" />
        <Chip label="Netlify" />
        <Chip label="HeroKu" />
        <Chip label="CodeSand Box" />
      </Stack>
    </div>
  );
}
