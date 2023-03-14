import React from "react";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
import "./Form.css";

const FormLoginIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form
        id="form"
        className="flex flex-col"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="full-form">
          <div className="full-form-header">
            <h2>User Registration</h2>
          </div>
          <div className="span-idea">
            <span>Register and Enjoy the Service</span>
          </div>
        </div>
        <div className="full-form-body">
          <div className="row">
            <div className="form-inputs">
              <label htmlFor="name" className="form-table">
                Name<span className="errorMessage">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="username" className="form-table">
                Username<span className="errorMessage">*</span>
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-table">
                Email<span className="errorMessage">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-table">
                Password<span className="errorMessage">*</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="contactNumber" className="form-table">
                Contact Number<span className="errorMessage">*</span>
              </label>
              <input
                id="contactNumber"
                type="text"
                name="contactNumber"
                className="form-input"
                placeholder="Enter your contact number"
                value={values.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && <p>{errors.contactNumber}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="address" className="form-table">
                Address<span className="errorMessage">*</span>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                className="form-input"
                placeholder="Enter your address"
                value={values.address}
                onChange={handleChange}
              />
              {errors.address && <p>{errors.address}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="gender" className="form-table">
                Male
              </label>
              <input
                id="male"
                type="radio"
                name="address"
                className="form-input"
                value={values.gender}
                onChange={handleChange}
              />
              <label htmlFor="gender" className="form-table">
                Female
              </label>
              <input
                id="female"
                type="radio"
                name="female"
                className="form-input"
                value={values.gender}
                onChange={handleChange}
              />
              {errors.gender && <p>{errors.gender}</p>}
            </div>
          </div>
        </div>
        <div className="full-form-footer">
          <button className="form-input-btn" type="submit">
            Register
          </button>
          <div className="form-input-span">
            <span className="form-input-login">
              Already have an account? <a href="$"> Log In</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLoginIn;
