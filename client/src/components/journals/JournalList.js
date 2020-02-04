import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import JournalCard from "./JournalCard";

const StyledLink = styled(Link)`

`;
const ListContainer = styled.div`
 
`;

function JournalList(props) {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    Axios.get("/restricted/exercises")
      .then(res => setExercises(res.data.exercises))
      .catch(err => console.log(err));
  }, []);

  return (
    <ListContainer>
      {props.journals.map((journal, index) => {
        const journalExercises = exercises.filter(exercise => {
          return exercise.journalId === journal.id;
        });
        return (
          <StyledLink to={`/journal/${journal.id}`} key={index}>
            <JournalCard
              journal={journal}
              journalExercises={journalExercises}
              journals={props.journals}
              setJournals={props.setJournals}
            />
          </StyledLink>
        );
      })}
    </ListContainer>
  );
}
export default JournalList;