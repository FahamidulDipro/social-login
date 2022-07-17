import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const FacebookLogin = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const facebookLoginHandler = () => {
    signInWithFacebook().then(() => {
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
        variant="dark w-100 p-2 "
        onClick={facebookLoginHandler}
        style={{ fontSize: "20px" }}
      >
        <img
          src="../facebook.png"
          alt="fbImg"
          style={{ height: "30px", marginRight: "30px" }}
        ></img>{" "}
        Signin With Facebook
      </Button>
      {console.log(user)}
      {console.log(error)}
    </div>
  );
};

export default FacebookLogin;
