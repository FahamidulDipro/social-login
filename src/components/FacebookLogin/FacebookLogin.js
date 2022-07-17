import React from 'react';
import { Button } from 'react-bootstrap';

const FacebookLogin = () => {
    return (
        <div className="mt-3">
      <hr />
      <Button
        variant="dark w-100 p-2 "
       
        style={{ fontSize: "20px" }}
      >
        <img
          src="../facebook.png"
          alt="fbImg"
          style={{ height: "30px", marginRight: "30px" }}
        ></img>{" "}
        Signin With Facebook
      </Button>
    </div>
    );
};

export default FacebookLogin;