import React from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as Yup from "yup";
import styled from "styled-components";

const RegisterForm = ({ errors, touched }) => {
  return (
    <Container>
      <Header>
        <LogoStyle>
          <span>App</span>
          <span>Name</span>
        </LogoStyle>
      </Header>
      <StyledForm>
        <fieldset>
          <UserNamePasswordLabel>Username</UserNamePasswordLabel>
          {touched.username && errors.username && (
            <Error className="error">{errors.username}</Error>
          )}
          <StyledField
            type="text"
            name="username"
            placeholder="TheGovernator47"
          />
        </fieldset>
        <fieldset>
          <UserNamePasswordLabel>First Name</UserNamePasswordLabel>
          {touched.firstName && errors.firstName && (
            <Error className="error">{errors.firstName}</Error>
          )}
          <StyledField type="text" name="firstName" placeholder="Arnold" />
        </fieldset>
        <fieldset>
          <UserNamePasswordLabel>Last Name</UserNamePasswordLabel>
          {touched.lastName && errors.lastName && (
            <Error className="error">{errors.lastName}</Error>
          )}
          <StyledField
            type="text"
            name="lastName"
            placeholder="Schwarzenegger"
          />
        </fieldset>
        <fieldset>
          <UserNamePasswordLabel>Email Address</UserNamePasswordLabel>
          {touched.email && errors.email && (
            <Error className="error">{errors.email}</Error>
          )}
          <StyledField
            type="text"
            name="email"
            placeholder="arnold@strong.com"
          />
        </fieldset>
        <fieldset>
          <UserNamePasswordLabel>Password</UserNamePasswordLabel>
          {touched.password && errors.password && (
            <Error className="error">{errors.password}</Error>
          )}
          <StyledField type="password" name="password" placeholder="******" />
        </fieldset>
        <ButtonStyle type="submit">Submit</ButtonStyle>
        <p>
          <Member>Already a member?</Member>
          <span> </span>
          <Link to="/login">Login</Link>.
        </p>
      </StyledForm>
    </Container>
  );
};

const Register = withFormik({
  mapPropsToValues({ username, password, firstName, lastName, email }) {
    return {
      username: username || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    Axios.post("auth/register", values).then(res => {
      if (res.data.token) {
        props.history.push("/dashboard");
        props.setUser(res.data.user);
      }
      console.log(res);
    });
  }
})(RegisterForm);

export default Register;

/****************Styles**************/
const StyledForm = styled(Form)`
  justify-content: center;
  padding-left: 20px;
  margin-top: 100px;
  margin-left: 10%;
  margin-right: 10%;
  height: 100%;
  padding-bottom: 50px;
  color: #ebebeb;
`;

const StyledField = styled(Field)`
  width: 80%;
  background: white;
  text-align: center;
  border: none;
  border-bottom: 1px solid #252627;
  border-radius: 5px;
  outline: none;
  color: #252627;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const UserNamePasswordLabel = styled.label`
  color: #252627;
  font-size: 2rem;
  font-family: "Alfa Slab One", cursive;
  padding: 10px 0;
  text-shadow: #ffffff 1px 1px 0;
`;

const Container = styled.div`
  background: #ebebeb;
  width: 100%;
  height: 100%;
  padding-bottom: 0px;
`;

const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 80px;
  background: #efbf3b;
  margin-top: 20px;
  margin-left: 0%;
  width: 100%;
  border-radius: 10px;
  color: #252627;
  font-size: 1.9rem;
  transition: 1s;
  font-family: "Alfa Slab One", cursive;
`;

const LogoStyle = styled.div`
  color: #252627;
  font-size: 2.5rem;
  text-shadow: #ebebeb 1px 1px 0;
  font-family: "Alfa Slab One", cursive;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  span:first-child {
    color: #991c27;
  }
`;

const Header = styled.div`
  background-color: rgba(37, 38, 39, 0.3);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Member = styled.span`
  color: black;
`;
const Error = styled.p`
  color: black;
`;