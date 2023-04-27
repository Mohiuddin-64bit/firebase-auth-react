import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { singIn, googleSign } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    if (password.length < 6) {
      return setError("Password should be more then 6 digits");
    }
    singIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center mb-12">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  required
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button
                  onClick={signInWithGoogle}
                  className="btn btn-primary mt-4"
                >
                  Google
                </button>
              </div>
              <p>
                <small>
                  Create an Account?{" "}
                  <Link
                    className="text-blue-500 font-bold"
                    to="../registration"
                  >
                    Click Here
                  </Link>
                </small>
              </p>
              <p>
                <small className="text-red-500">{error}</small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
