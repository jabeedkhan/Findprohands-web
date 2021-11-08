import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function Login() {
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
                  Sign In
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
                <p className="forgot-password text-right p-4">
                  Don't Have Account? <a href="/sign-up" style={{color:'green',fontSize:'30px',margin:'10px'}}>SignUp</a>
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
export default Login;
