import React from "react";
import { useFormik } from "formik";
const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("form values", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  });
  console.log(" Form errors ", formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label> Form using Formik</label>
      <label>First Name</label>
      <div className="form-control">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error"> {formik.errors.firstName} </div>
        ) : null}
      </div>
      <label>Last Name</label>
      <div className="form-control">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error"> {formik.errors.lastName} </div>
        ) : null}
      </div>
      <label>Email </label>
      <div className="form-control">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error"> {formik.errors.email} </div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
