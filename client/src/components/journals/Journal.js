import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import { TextField, ServerStyleSheets } from "@material-ui/core";
import styled from "styled-components";
import * as yup from 'yup';
import  {useform} from 'react-hook-form';

const StyledButton = styled(Button)`
  margin-bottom: 10px;
  padding: 2%;
`;
const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: navy;
  border-radius: 2%;
  border-bottom: 3px solid navy;
  padding: 3%;
`;
const Journal = () => {
  const {val, setValue} = useState();
  const [bodyParts, setBodyPart] = useState(" ");
  const [sets, setNumSets] = useState(0);
  const [reps, setNumReps] = useState(0);
  const [weight, setWeightAmt] = useState(0);
  const [exercise, setExercise] = useState(" ");

  const handleSubmit = event => {
    event.preventDefault();
    setNumSets(" ")
    setBodyPart(" ")
    setNumReps(" ")
    setWeightAmt(" ")
    setExercise( " ")
  };

  return (
    <div>
      <header>
        <StyledH1>FitTrip</StyledH1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Body Part Exercised"
            id="bodyPart"
            variant="outlined"
            onChange={event => setBodyPart(event.target.value)}
            error
          />
          <br />
          <br />
          <TextField 
          label="Number of Sets"
          id="numSets" 
          variant="outlined"
          onChange={event=> setNumSets(event.target.value)} />
          <br />
          <br />
          <TextField 
          label="Number of Reps"
           id="numReps"
          variant="outlined"
          onChange={event => setNumReps(event.target.value)} />
          <br />
          <br />
          <TextField
            label="Amount of Weight Lifted"
            id="amountWeight"
            variant="outlined"
           onChange={event => {setWeightAmt(event.target.value)}}
          />
          <br />
          <br />
          <TextField
            label="Exercise Type"
            id="exerciseType"
            variant="outlined"
            onChange={event => {setExercise(event.target.value)}}
          />
          <br />
          <br />
          <br />
          <StyledButton variant="contained">Add Workout</StyledButton>
          <br /> <br />
        </form>
      </main>
      <footer> </footer >
    </div>
  );
};
export default Journal;