import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const About = () => {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div>
        {" "}
        <h1 className="shadow-lg p-5">
          {" "}
          <span className="text-success fw-bold"> Congratulation! </span>You are
          successfully Logged In
        </h1>
        <div>
          <div className="mt-3">
            <ul className="list-unstyled fw-bold text-start">
              <li className="mt-2 bg-secondary text-light p-3">
                This application allows users to sign-up to a website using
                gmail or facebook credential by one click login.
              </li>
              <li className="mt-2 bg-secondary text-light  p-3">
                Main page (Home Page) has two buttons.
              </li>
              <li className="mt-2 bg-secondary text-light  p-3">
                {" "}
                On clicking them, it should authenticate with Fb/ gmail and move
                to the next page.
              </li>
              <li className="mt-2 bg-secondary text-light  p-3">
                {" "}
                React Bootstrap is used to design the UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
