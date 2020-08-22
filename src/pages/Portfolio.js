import React, { Component } from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import "./style.css";

class Portfolio extends Component {
    state = {projects};

    render() {
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

<div className="cards">
      {this.state.projects.map(item => (
          <Project 
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
      ))}
      </div>

      {/* <div className="row">

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
        </div> */}
        </div>
        </div>
    );
    }
}

export default Portfolio;