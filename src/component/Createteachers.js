import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


function Createteachers() {
  let navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
  
      name: "",
      age: "",
      department: "",
      phoneno: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};

  
      if (!values.name) {
        error.name = "Please enter the name";
      }

      if (
        values.name &&
        (values.name.length <= 2 || values.name.length > 15)
      ) {
        error.name = "Username must be between 3 to 15 characters";
      }

      if (!values.age || values.age < 25) {
        error.age = "Age should not be lesser than 25";
      }
      if (!values.department) {
        error.department = "please enter Department";
      }
      
      if (values.phoneno.toString().length !== 10) {
        error.phoneno = "Please enter the valid Phone number";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://651d9f1b44e393af2d5a19a0.mockapi.io/api/teacher",
          values
        );
        alert("Form submitted sucessfully");
        navigate('/portal/teachers')
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <h2>Add Teachers Form</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
 
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name*</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.touched.name && formik.errors.name
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Age*</label>
              <input
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                type={"number"}
                className={`form-control ${
                  formik.touched.age && formik.errors.age ? "error-box" : ""
                } ${
                  formik.touched.age && !formik.errors.age
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.age && formik.errors.age ? (
                <span style={{ color: "red" }}>{formik.errors.age}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Department</label>
              <select
                name="department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
                className={`form-control ${
                  formik.touched.department && formik.errors.department ? "error-box" : ""
                } ${
                  formik.touched.department && !formik.errors.department
                    ? "success-box"
                    : null
                }`}
              >
                <option>Tamil</option>
                <option>English</option>
                <option>Maths</option>
                <option>Science</option>
                <option>Social</option>
                <option>Computer Science</option>
                <option>Art and Design</option>
              </select>
              {formik.touched.department && formik.errors.department ? (
                <span style={{ color: "red" }}>{formik.errors.department}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone No*</label>
              <input
                name="phoneno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneno}
                type={"number"}
                className={`form-control ${
                  formik.touched.phoneno && formik.errors.phoneno ? "error-box" : ""
                } ${
                  formik.touched.phoneno && !formik.errors.phoneno
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.phoneno && formik.errors.phoneno ? (
                <span style={{ color: "red" }}>{formik.errors.phoneno}</span>
              ) : null}
            </div>
          </div>
         
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input disabled={formik.errors.values} type={"submit"} className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createteachers;
