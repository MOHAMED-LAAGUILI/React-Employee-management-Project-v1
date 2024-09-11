import React, { useState } from "react";
import Header from "./Component/Header";

export default function App() {
  const [employees, setEmployee] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({
    id: "",
    nm: "",
    email: "",
    phone: "",
    job: "",
    sex: "",
    xp_years: "",
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleChangeEmployee = (e) => {
    setCurrentEmployee({
      ...currentEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    let newEmp = { ...currentEmployee, id: employees.length + 1 };
    setEmployee([...employees, newEmp]);
    setCurrentEmployee({
      id: "",
      nm: "",
      email: "",
      phone: "",
      job: "",
      sex: "",
      xp_years: "",
    });
  };

  const handleDeleteEmp = (index) => {
    const employeeToDelete = employees[index];
    
    // Remove the employee from the list
    setEmployee(employees.filter((_, i) => i !== index));

    // If the selected employee is the one being deleted, reset the selection
    if (selectedEmployee && selectedEmployee.id === employeeToDelete.id) {
      setSelectedEmployee(null); // Clear selected employee
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <Header />

          {/* Form to Add Employee */}
          <div className="row">
            <div className="col-md-7">
              <h1 className="text text-primary">Add New User</h1>

              <form onSubmit={handleAddEmployee}>
                <div className="form-group">
                  <label htmlFor="nm">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nm"
                    id="nm"
                    value={currentEmployee.nm}
                    onChange={handleChangeEmployee}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={currentEmployee.email}
                    onChange={handleChangeEmployee}
                    required
                  />
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={currentEmployee.phone}
                    onChange={handleChangeEmployee}
                    required
                  />
                  <label htmlFor="job">Jobs</label>
                  <select
                    name="job"
                    id="job"
                    className="form-control"
                    value={currentEmployee.job}
                    onChange={handleChangeEmployee}
                    required
                  >
                    <option value="" disabled>
                      Choose option
                    </option>
                    <option value="UI/UX dev">UI/UX dev</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="IT Specialist">IT Specialist</option>
                  </select>

                  <div className="form-group">
                    <label htmlFor="sex">Sex</label>
                    <select
                      name="sex"
                      id="sex"
                      className="form-control"
                      value={currentEmployee.sex}
                      onChange={handleChangeEmployee}
                      required
                    >
                      <option value="" disabled>
                        Choose option
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <label htmlFor="xp_years">Experience Years</label>
                  <input
                    min={0}
                    max={20}
                    type="number"
                    className="form-control"
                    name="xp_years"
                    id="xp_years"
                    placeholder="0"
                    value={currentEmployee.xp_years}
                    onChange={handleChangeEmployee}
                    required
                  />
                  <br />
                  <button className="btn btn-primary mt-2" type="submit">
                    ADD USER
                  </button>
                </div>
              </form>
            </div>

            {/* Display Selected Employee's Details */}
            <div className="col-md-5">
              {selectedEmployee && (
                <div className="row">
                  <div className="col-md-6">
                    {/* Display Male or Female Image */}
                    <img
                      src={
                        selectedEmployee.sex === "Male"
                          ? "/male.png"
                          : "/female.png"
                      }
                      alt="userimg"
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className="col-md-6">
                    <ul>
                      <li>
                        <strong>Name:</strong> {selectedEmployee.nm}
                      </li>
                      <li>
                        <strong>Email:</strong> {selectedEmployee.email}
                      </li>
                      <li>
                        <strong>Phone:</strong> {selectedEmployee.phone}
                      </li>
                      <li>
                        <strong>Job:</strong> {selectedEmployee.job}
                      </li>
                      <li>
                        <strong>Sex:</strong> {selectedEmployee.sex}
                      </li>
                      <li>
                        <strong>Experience Years:</strong>{" "}
                        {selectedEmployee.xp_years}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Employee List Table */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="text text-primary text-center">Employee List</h2>

              <table className="table table-striped" border={2}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Job</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Experience Years</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => setSelectedEmployee(item)}
                    >
                      <td>{index + 1}</td>
                      <td>{item.nm}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.job}</td>
                      <td>{item.sex}</td>
                      <td>{item.xp_years}</td>
                      <td>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click from being triggered
                            handleDeleteEmp(index);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}
