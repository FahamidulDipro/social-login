import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import FacebookLogin from "../FacebookLogin/FacebookLogin";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "38rem" }} className="border-0 shadow-lg">
        <Card.Body className="text-start">
          <Card.Title>Sign in with <span style={{color:"orange",fontSize:"30px",fontWeight:"bold"}}>Google</span>  or, <span style={{color:"indigo",fontSize:"30px",fontWeight:"bold"}}>Facebook</span></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Click on the Sign In with Google button to Sign In
          </Card.Subtitle>

          <div>
            {!user ? (
              <><GoogleLogin></GoogleLogin><FacebookLogin></FacebookLogin></>
            ) : (
              <h2 className="bg-success text-light p-3 my-5">You Are Already Logged In</h2>
            )}
          </div>
        </Card.Body>
       
      </Card>
    </div>
  );
};

export default Home;
