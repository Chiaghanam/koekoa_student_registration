import React, {useEffect} from 'react'
import { loginStudent } from '../component/slice/LoginSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MenuBar from '../component/MenuBar'
const Home = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.login);
    useEffect(()=>{
        if (window.localStorage.getItem('access_token') == null || ""){
            navigate("/")
        }
    })
  return (
    
    <div className='container col-12' >
      <MenuBar />
      <div style={{position: "absolute", top: "1rem", left: "1rem"}} >
        <h1>Welcome, {user?.user?.username}!</h1>
      </div>
      <div className="row d-flex container-fluid">
        <div className="col-md-6 ">
        <h2 className='text-center mt-5'>Student Dashboard</h2>
        <p className='text-center'>This is the student dashboard.courses, and other information here.</p>
      </div>
      <div className="col-md-6">
        <h2 className='text-center mt-5'>Student Profile</h2>
        <p>student_id: {user?.user?.student_id}</p>
        <p>First Name: {user?.user?.first_name}</p>
        <p>Last Name: {user?.user?.last_name}</p>
        <p>Gender: {user?.user?.gender}</p>
        <p>Course of study: {user?.user?.course}</p>
        <p>Email: {user?.user?.email}</p>
        <p>Phone: {user?.user?.phone}</p>

      </div>
      </div>
      
      
    </div>
  )
}

export default Home
