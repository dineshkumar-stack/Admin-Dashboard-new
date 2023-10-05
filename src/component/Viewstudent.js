import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router';

function Viewstudent() {

  let navigate = useNavigate();
  let params = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://651d997044e393af2d5a1050.mockapi.io/api/students/${params.id}`)
        setUser(response.data)
      } catch {
        console.log("data Error")
      }
    }
    fetchData();
  }, [])

  let handleClick = () => {
    navigate('/portal/students')
  }
  return (
    <div>
      <h1 className='text-center text-dark'>Student Details</h1>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
            <thead className="text-center text-dark">
              <tr>
                <th className='h4'>Roll Number</th>
                <th className='h4'>Name</th>
                <th className='h4'>Age</th>
                <th className='h4'>Grade</th>
                <th className='h4'>Gender</th>
              </tr>
            </thead>
            <tbody>
              <td className='text-center text-dark h3 text-capitalize'>{user.rollnumber}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.name}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.age}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.grade}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.gender}</td>
            </tbody>
          </table>
        </div>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Return Students</button>
      </div>
    </div>
  )
}

export default Viewstudent