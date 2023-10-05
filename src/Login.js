import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./component/Usercontext";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Email Missing";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
      ) {
        errors.username = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password  missing";
      }
      return errors;
    },
    onSubmit: (values) => {
      navigate("/portal/teachers")
      alert("Login sucessfully");
      setUser({ username: values.username });

    },
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-4 col-md-2">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Admin Portal</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <input
                          name="username"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          type="email"
                          className={`form-control form-control-user ${formik.touched.username && formik.errors.username
                              ? "error-box"
                              : ""
                            } ${formik.touched.username && !formik.errors.username
                              ? "success-box"
                              : null
                            }`}
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                        {formik.touched.username && formik.errors.username ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.username}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          type="password"
                          className={`form-control form-control-user ${formik.touched.password && formik.errors.password
                              ? "error-box"
                              : ""
                            } ${formik.touched.password && !formik.errors.password
                              ? "success-box"
                              : null
                            }`}
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-success btn-user btn-block"
                        >
                          Login
                        </button>
                      </div>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link
                        to={"/register"}
                        className="btn btn-light btn-user btn-block"
                      >
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
