import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent, resetLogin } from "../component/slice/LoginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { success, loading, error } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(resetLogin());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      navigate("/Home");
    }
  }, [success, navigate]);

  const onSubmit = (data) => {
    dispatch(loginStudent(data));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              {...register("username")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password")}
            />
          </div>


          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          I don't have an account? <a href="/Registration">Register here</a>
        </form>

        
      </div>
    </div>
  );
};

export default Login;