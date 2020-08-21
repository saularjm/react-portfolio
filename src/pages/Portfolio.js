import React from "react";
import Project from "../components/Project";

function Portfolio() {
    return (
        <div className="container">

    <div className="jumbotron col-12">

      <div className="row">

        <div className="col-md-12">

          <div className="page-header mb-4">
            <h1>Portfolio</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-md-4"><Project /></div>
        <div className="col-md-4"><Project /></div>
        <div className="col-md-4"><Project /></div>
        </div>

        <div className="row">

        <div className="col-md-4"><Project /></div>
        <div className="col-md-4"><Project /></div>
        <div className="col-md-4"><Project /></div>
        </div>

        <div className="row">

        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        </div>
        </div>
        </div>
    );
}

export default Portfolio;