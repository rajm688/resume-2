import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function Projects() {
  const ProjectName = [
    {
      name: "Movie-List CRUD ",
      Details: "Fetching and Performing CRUD operations in Mock API",
      Tools: "Rract",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Tic-Tak-Toe",
      Details: "React-based interactive tic-tac-toe game",
      Tools: "React",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Thirukkural API",
      Details:
        "Collection of thirukkurals ordered by the number chosen from the API",
      Tools: "Javascript DOM",
      link: "https://findmythirukkural.netlify.app/",
    },
    {
      name: "Harrypotter API",
      Details:
        "Fetching and presenting information of the characters in Harry Potter moive",
      Tools: "Javascript DOM",
      link: "https://harrypotter-api.netlify.app/",
    },
    {
      name: "Calculator",
      Details:
        "Created an interactive Calculator to do simple math operations.",
      Tools: "Javascript DOM",
      link: "https://calculatorwithdom.netlify.app/",
    },
    {
      name: "CRUD with Local Data",
      Details:
        "Created and performed CRED operation with Local Data ",
      Tools: "React",
      link: "https://pokemon-cerd.netlify.app/",
    },
  ];
  return (
    <div id="Projects" className="Projects">
      <h1 id="link" style={{ fontSize: "2.0vw" }}>
        My Initiatives
      </h1>
      <h3 id="link" style={{ fontSize: "2.0vw" }}>
        Take a peek at some of my work listed below.
      </h3>{" "}
      <div className="projects">
        {ProjectName.map(({ name, Details, Tools, link }) => (
          <ProjectDetails
            name={name}
            Details={Details}
            Tools={Tools}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}
function ProjectDetails({ name, Details, Tools, link }) {
  return (
    <div className="trans">
      <Card
        sx={{
          width: "250px",
          height: "260px",
          background: "linear-gradient(45deg, #3f7afa 30%, #05cdff 50%)",
        }}
      >
        <CardContent>
          <p id="link">{name}</p>
          <p id="link">{Tools}</p>
          <p id="link">{Details}</p>
        </CardContent>
        <CardActions>
          <Button
            style={{ color: "white" }}
            href={link}
            target="_blank"
            size="small"
          >
            <span id="link">explore</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
