import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Button } from "react-bootstrap";

const GoogleLogin = () => {
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const googleLoginHandler = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  //Displaying Loading Spinner while logging in
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-3">
      <hr />
      <Button
        variant="outline-primary w-100 p-2 "
        onClick={googleLoginHandler}
        style={{ fontSize: "20px" }}
      >
        <img
          src="../google.png"
          alt="googleImg"
          style={{ height: "30px", marginRight: "30px" }}
        ></img>{" "}
        Signin With Google
      </Button>
    </div>
  );
};

export default GoogleLogin;
