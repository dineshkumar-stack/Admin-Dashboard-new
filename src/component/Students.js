import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
import { GrOverview } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';


function Students() {
  const [userData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://651d997044e393af2d5a1050.mockapi.io/api/students"
      );

      setUsersData(users.data);
      setLoading(false);
    } catch {
      alert("Error");
    }
  };

  const deleteUser = (id) => {
    swal({
      title: "This Data wants to delete",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://651d997044e393af2d5a1050.mockapi.io/api/students/${id}`
          )
          .then(() => {
            getData();
          });

        swal(" Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Hope to safe!");
      }
    });
  };

  const getData = () => {
    axios
      .get(`https://651d997044e393af2d5a1050.mockapi.io/api/students`)
      .then((getData) => {
        setUsersData(getData.data);
      });
  };


  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800"></h1>
        <Link
          to={"/portal/create-students"}
          className="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm"
        >
          <AiOutlineUserAdd style={{ marginBottom: "2px" }} />{" "}

          Student
        </Link>
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-dark">Student Details</h6>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Roll Number</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Gender</th>
                    <th className='text-center'>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.rollnumber}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.grade}</td>
                        <td>{data.gender}</td>
                        <td>
                          <div className="text-center">
                            <Link
                              to={`/portal/students-view/${data.id}`}
                              className="btn btn-warning mr-1 mb-1"
                            >
                              <GrOverview style={{ marginBottom: "2px" }} />
                            </Link>
                            <Link
                              to={`/portal/edit-students/${data.id}`}
                              className="btn btn-secondary mr-1 mb-1"
                            >
                              <AiTwotoneEdit style={{ marginBottom: "2px" }} />
                            </Link>
                            <button
                              onClick={() => deleteUser(data.id)}
                              className="btn btn-danger"
                            >
                              <AiFillDelete style={{ marginBottom: "2px" }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default Students;
