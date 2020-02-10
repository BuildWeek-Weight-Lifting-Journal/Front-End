import React, { useState } from "react";
import Axios from "axios";
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

    Axios.post("restricted/journals/", workoutValues)
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
  color: #252627;
  font-size: 2.5rem;
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  span:first-child {
    color: #0c93d3;
  }
`;
const Date = styled.div`
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 1.9rem;
  color: #0c93d3;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 80px;
  background: #0c93d3;
  margin-top: 1%;
  margin-left: 0%;
  width: 100%;
  border-radius: 10px;
  color: #252627;
  font-size: 1.9rem;
  transition: 1s;
  font-family: "Ubuntu";
  font-weight: 700;
  `;