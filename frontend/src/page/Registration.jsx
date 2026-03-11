import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { registerStudent } from '../component/slice/RegisterSlice';
import {useNavigate} from 'react-router-dom';
const Registration = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.register);
    const onSubmit = (data) => {
        dispatch(registerStudent(data));
       
    }
    useEffect(() => {
        if (success) {
            alert("Registration successful!")
            navigate("/")
        }
        if (error) {
            alert(error)
        }
    }, [success, error, navigate])
  
  return (
     <div className="container mt-5">
      <div className="card bg-secondary shadow p-4">
        <h2 className="text-center mb-4">Student Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              {...register("username")}
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <input
              {...register("first_name")}
              className="form-control"
              placeholder="First Name"
            />
          </div>

          <div className="mb-3">
            <input
              {...register("last_name")}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
           <div className="mb-3">
            <input
              type="email"
              {...register("email")}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <input
              {...register("student_id")}
              className="form-control"
              placeholder="Student ID"
            />
          </div>

          <div className="mb-3">
            <input
              {...register("phone")}
              className="form-control"
              placeholder="Phone"
            />
          </div>
           <div className="mb-3">
            <input
              {...register("course")}
              className="form-control"
              placeholder="Course"
            />
          </div>

          <div className="mb-3">
            <select {...register("gender")} className="form-select">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="password"
              {...register("password")}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>

          i already have an account? <a href="/">Login here</a>
        </form>
        </div>
    </div>
  )
}

export default Registration
