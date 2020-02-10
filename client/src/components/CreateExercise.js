import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

/*=============== MAIN FORM ===============*/
function CreateExercise({ errors, touched }) {
  const fields = ["name", "sets", "reps", "weight"];

  return (
    <StyledForm>
      {fields.map((item, index) => {
        const error = Boolean(touched[item] && errors[item]);

        return (
          <Label key={index} forhtml={item} error={error.toString()}>
            {item.charAt(0).toUpperCase() + item.slice(1)}:
            <StyledField
              type={item === "name" ? "text" : "number"}
              name={item}
              placeholder={
                item === "name"
                  ? error
                    ? errors[item]
                    : "e.g. Bench Press"
                  : item === "weight"
                  ? error
                    ? "Must be 0 or higher"
                    : "e.g. 1 (lbs)"
                  : error
                  ? "Must be 1 or higher"
                  : "e.g. 1"
              }
              error={error.toString()}
            />
            <br />
          </Label>
        );
      })}

      <ButtonStyle>Add Exercise</ButtonStyle>
    </StyledForm>
  );
}

/*=============== FORMIK WRAP ===============*/
const FormikCreateExercise = withFormik({
  mapPropsToValues({ name, sets, reps, weight, journal, user }) {
    return {
      journalId: journal,
      userId: user.id,
      name: name || "",
      sets: sets || 0,
      reps: reps || 0,
      weight: weight || 0
    };
  },

  /*===== Validation =====*/
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    sets: Yup.number()
      .min(1, "Sets must be 1 or higher")
      .required("Set amount is required"),
    reps: Yup.number()
      .min(1, "Reps must be 1 or higher")
      .required("Rep amount is required"),
    weight: Yup.number()
      .min(0, "Weight must 0 or higher")
      .required()
  }),

  /*===== Submit Handler =====*/
  handleSubmit(values, { props, setSubmitting, resetForm }) {
    axios
      .post("restricted/exercises/", values)
      .then(response => {
        console.log(response);
        resetForm();
        setSubmitting(false);
        props.setButton(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
      });
  }
})(CreateExercise);

/*=============== STYLED COMPONENTS ===============*/
const Label = styled.label`
  color: ${props => (props.error === "true" ? "red" : "black")};
`;

const StyledField = styled(Field)`
  margin-top: 15px;
  margin-left: 5px;
  color: ${props => (props.error === "true" ? "red" : "black")};
  border: 1px solid ${props => (props.error === "true" ? "red" : "#cccccc")};
  width: 40%;
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

const StyledForm = styled(Form)`
font-family: "Ubuntu";
font-weight: 700;
`;

const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 20px;
  background: #0c93d3;
  margin-bottom: 5%;
  margin-left: 0%;
  width: 40%;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 1.1rem;
  transition: 1s;
  font-family: "Ubuntu";
  font-weight: 700;
  `;

/*=============== EXPORT ===============*/
export default FormikCreateExercise;
