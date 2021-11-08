import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function Signup() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5">
              <form>
                <h3 style={{ paddingTop: "40px", textAlign: "center" }}>
                  Sign Up
                </h3>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right p-2">
                  Have Account  <a href="/sign-in" style={{color:'skyblue',fontSize:'30px',margin:'10px'}}>Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
export default Signup;
