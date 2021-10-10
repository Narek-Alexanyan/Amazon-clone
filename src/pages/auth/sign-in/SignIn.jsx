import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// styles ###
import "./signIn.scss";

// images ###
import Logo from "../../../assets/images/Amazon_logo-black.svg";

// redux ###
import { useDispatch } from "react-redux";
import { isNavbar } from "../../../actions";

// Formik ###
import { useFormik } from "formik";

export default function SignIn() {
  // close navbar ###
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isNavbar(false));
    return () => {
      dispatch(isNavbar(true));
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="sign_in">
      <div className="sign_in-logo">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="sign_in-form">
        <h1>Sign-In</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
