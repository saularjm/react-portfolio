import React from "react";

function About() {
    return (
        <div className="container">

    <div className="jumbotron col-md-10">
      
      <div className="row">

        <div className="col">

          <div className="page-header mb-4">
            <h1>About Me</h1>
            <hr />
          </div>
        </div> 
      </div>   

      <div className="row">

        <div className="col-md-3 padding:20px">
          <img src="https://saularjm.github.io/portfolio/assets/coding-screen.jpg" alt="coding-screen" className="img-thumbnail img-responsive" />
        </div>

        <div className="col-md-9">
          <p>
            My name is Saular Moaddeli. I used to be a personal trainer, but I've changed
            my career course to coding, including programming in Java and full-stack web development.
          </p>
          <p>
            I'm from Salt Lake City, Utah, and I've also lived in Los Angeles. I now live in Roseville, CA
            with my wife and dog.
          </p>
        </div> 
      </div>
    </div>

    <div className="col-md-10">

      <header><h2>Contact Info</h2></header>
      <hr />

      <ul>
        <li><strong>Email:</strong> <a href="mailto:jake.moaddeli@gmail.com" target="_blank" rel="noopener noreferrer">jake.moaddeli@gmail.com</a></li>
        <li><strong>Github:</strong> <a href="https://github.com/saularjm" target="_blank" rel="noopener noreferrer">Check out my repositories!</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/saular-moaddeli-889a4b1a0" target="_blank" rel="noopener noreferrer">My profile</a></li>
        <li><strong>Resume:</strong> <a href="https://saularjm.github.io/portfolio/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">Click here to view</a></li>
      </ul>
    </div>
  </div>
    );
}

export default About;