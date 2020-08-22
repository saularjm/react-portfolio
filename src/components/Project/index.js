import React from "react";
import "./style.css"

function Project(props) {
    return (
        <div className="card mb-3 mx-auto text-center">

            <img src={props.image} className="card-img-top" alt="Crystal ball" />

              <div className="card-body">

                <h5 className="card-title">{props.title}</h5>

                <p className="card-text">{props.description}</p>
              </div>

              <div className="card-body">
                <a href={props.url} className="card-link">Check it out!</a>
              </div>
          </div>
    );
}

export default Project;