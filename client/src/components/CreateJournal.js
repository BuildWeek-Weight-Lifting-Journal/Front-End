import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CreateJournal = props => {
  console.log(props);
  const [workout, setWorkout] = useState({
    date: "",
    typeOfWorkout: ""
  });

  const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const workoutValues = {
      userId: props.match.params.id,
      date: workout.date,
      region: workout.typeOfWorkout
    };

    axios.post("restricted/journals/", workoutValues)
      .then(function(res) {
        props.history.push(`/dashboard`);
        console.log("Res:", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Title>Let's Journalize Those Gains!</Title>
      <Container>
        <form onSubmit={handleSubmit}>
          <Date>Date</Date>
          <label>
            <input
              className="date"
              type="date"
              name="date"
              value={workout.date}
              placeholder="mm/dd/yyyy"
              onChange={inputHandler}
            />
          </label>
          <span></span>
          <label>
            <Date>Select a Region</Date>
            <select
              className="typeOfWorkout"
              name="typeOfWorkout"
              value={workout.typeOfWorkout}
              onChange={inputHandler}
            >
              <option />
              <option>Upper Body</option>
              <option>Lower Body</option>
              <option>Core</option>
            </select>
          </label>
          <ButtonStyle onSubmit={() => handleSubmit()}>Submit</ButtonStyle>
        </form>
      </Container>
    </>
  );
};
export default CreateJournal;

/*************Styles************/
const Title = styled.h2`
  
`;
const Date = styled.div`
  
`;
const Container = styled.div`
  
`;

const ButtonStyle = styled.button`

`;