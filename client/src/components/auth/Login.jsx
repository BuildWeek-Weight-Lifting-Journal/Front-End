/*
FROM: WARREN RAWLINGS
This is the "sign-in side" version for the sign in form. This will be the base for the main sign in.
If I have time and help from Darren, I will do the google account sign in/registration button.
Follow the link if you need more information on the code I used.
https://material-ui.com/getting-started/templates/

*/
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSet from './dumbbell-weightlifting-image.jpg';

import * as Yup from 'yup';

import Axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    //backgroundImage: 'url("../dumbbell-weightlifting-image.jpg")',
    backgroundImage: `url(${BackgroundSet})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({ errors, touched, setUser }) => {

  return (
    <Container>
      <Header>
        <LogoStyle>
          <span>Get</span>
          <span>Fit</span>
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
            
          />
        </fieldset>
        <fieldset>
          <UserNamePasswordLabel>Password</UserNamePasswordLabel>
          {touched.password && errors.password && (
            <Error className="error">{errors.password}</Error>
          )}
          <StyledField type="password" name="password" />
        </fieldset>
        <ButtonStyle type="submit">Submit</ButtonStyle>
        <p>
          <Member>Not a member?</Member> <span> </span>
          <Link to="/register">Register</Link>
        </p>
      </StyledForm>
    </Container>
  );
};

const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    Axios.post("auth/login", values).then(res => {
      console.log(values)
      if (res.data.token) {
        props.history.push("/dashboard");
        props.setUser(res.data.user);
        localStorage.setItem("id", res.data.username);
        
      }
    });
  }
})(LoginForm);

export default Login;

/*************Styles************************/
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
  font-family: "Ubuntu";
  font-weight: 700;
  text-shadow: #ffffff 1px 1px 0;
  padding: 10px 0;
`;

const Container = styled.div`
position: 'absolute', left: '50%', top: '50%',
transform: 'translate(-50%, -50%)'
`;

const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 80px;
  background: #0c93d3;
  margin-top: 20px;
  margin-left: 0%;
  width: 100%;
  border-radius: 10px;
  color: #252627;
  font-size: 1.9rem;
  transition: 1s;
  font-family: "Ubuntu";
  font-weight: 700;
`;

const LogoStyle = styled.div`
  color: #252627;
  font-size: 2.5rem;
  text-shadow: #ebebeb 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  span:first-child {
    color: #0c93d3;
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