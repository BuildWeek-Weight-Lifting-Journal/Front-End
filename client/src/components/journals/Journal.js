import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CreateExercise from "../CreateExercise"
import { UserContext } from "../../contexts/UserContext.js";
import styled from "styled-components";

function Journal(props) {
  const [button, setButton] = useState(false);
  const { user } = useContext(UserContext);
  const [exercises, setExercises] = useState();

  console.log(user);

  const handleClick = (e, id) => {
    e.preventDefault();
    Axios.delete(`/restricted/exercises/${id}`).then(res => {
      const newExercises = exercises.filter(exercise => {
        return exercise.id !== id;
      });
      setExercises(newExercises);
    });
  };

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`restricted/exercises/journal/${id}`)
      .then(res => {
        console.log(res);
        setExercises(res.data.exercises);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id, button]);

  console.log(props);

  return (
    <div>
      {exercises &&
        exercises.map((item, index) => {
          return (
            <div key={index}>
              <Container>
                <ExerciseStyled>{item.name}</ExerciseStyled>

                <ExerciseContainer>
                  <StyledRegion>
                    <div>
                      Sets
                      <div>{item.sets}</div>
                    </div>
                  </StyledRegion>

                  <StyledRegion>
                    Reps
                    <div>{item.reps}</div>
                  </StyledRegion>

                  <StyledRegion>
                    Weight(lbs)
                    <div>{item.weight}</div>
                  </StyledRegion>

                  <StyledRegion>
                    <ButtonStyleSmall onClick={e => handleClick(e, item.id)}>
                      Delete
                    </ButtonStyleSmall>
                  </StyledRegion>
                </ExerciseContainer>
              </Container>
            </div>
          );
        })}
      {button ? (
        <CreateExercise
          journal={props.match.params.id}
          user={user}
          setExercises={setExercises}
          exercises={exercises}
          setButton={setButton}
        />
      ) : (
        <ButtonStyle onClick={() => setButton(true)}>
          Create New Exercise
        </ButtonStyle>
      )}
    </div>
  );
}
export default Journal;

/****************Styles************/
const ButtonStyle = styled.button`
  height: auto;
  padding: 10px 10px;
  background: #efbf3b;
  margin-bottom: 5%;
  margin-left: 0%;
  margin-top: 2%;
  width: 50%;
  border-radius: 10px;
  color: #252627;
  font-size: 1rem;
  transition: 1s;
  font-family: "Alfa Slab One", cursive;
`;

const ButtonStyleSmall = styled.button`
  height: auto;
  background: #991c27;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 1rem;
  transition: 1s;
  font-family: "Alfa Slab One", cursive;
`;

const ExerciseContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  margin-bottom: 5%;
  margin-left: 5%;
`;

const StyledRegion = styled.div`
  
  color: #252627
  font-size: 1rem;
  font-family: "Alfa Slab One", cursive;
  text-shadow: #ffffff 1px 1px 0;
  margin:10%;
  
`;

const ExerciseStyled = styled.div`
  color: #252627
  font-size: 3rem;
  font-family: "Alfa Slab One", cursive;
  text-shadow: #ffffff 1px 1px 0;
  margin-left:2%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;