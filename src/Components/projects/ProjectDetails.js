import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            quisquam ut? Expedita, hic possimus sint adipisci animi quas sequi
            harum quo commodi sapiente? Omnis ipsum aut provident atque eius
            non.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Active Coder</div>
          <div>12 Aug, 8.40am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
