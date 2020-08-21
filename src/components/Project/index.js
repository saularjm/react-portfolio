import React from "react";

function Project(props) {
    return (
        <div class="card mb-3 mx-auto text-center" style="width: 85%; height: 495px;">

            <img src={props.image} class="card-img-top" alt="Crystal ball" />

              <div class="card-body">

                <h5 class="card-title">{props.title}</h5>

                <p class="card-text">{props.description}</p>
              </div>

              <div class="card-body">
                <a href={props.url} class="card-link">Check it out!</a>
              </div>
          </div>
    );
}

export default Project;