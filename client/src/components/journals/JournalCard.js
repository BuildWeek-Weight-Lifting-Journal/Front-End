import React from "react";
import styled from "styled-components";
import Axios from "axios";

function JournalCard(props) {
  const { updated_at, region, id } = props.journal;
  const { journals, setJournals } = props;
  const date = updated_at.split(" ");

  const handleClick = e => {
    e.preventDefault();
    Axios.delete(`/restricted/journals/${id}`).then(res => {
      const newJournals = journals.filter(journal => {
        return journal.id !== id;
      });
      setJournals(newJournals);
    });
  };

  return (
    <Container>
      <Exercise>
        <RegionStyled>{region}</RegionStyled>
        <StyledData>Date Created: {date[0]}</StyledData>
        <StyledData>Exercises: {props.journalExercises.length} </StyledData>
        <ButtonStyle onClick={e => handleClick(e)}>Delete</ButtonStyle>
      </Exercise>
    </Container>
  );
}
export default JournalCard;

/**************Styles************/
const RegionStyled = styled.div`
  color: #252627;
  font-size: 2rem;
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  width: 100%;

  padding-left: 20px;
  span:first-child {
    color: #991c27;
  }
`;
const StyledData = styled.div`
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Alfa Slab One", cursive;
  font-size: 1rem;
  color: #991c27;
  text-align: center;
`;
const Exercise = styled.div`
  color: #991c27;
  width: 75%;
  font-size: 1rem;
  font-family: "Alfa Slab One", cursive;
  text-shadow: #ffffff 1px 1px 0;
  padding: 10px 0;
  margin: 20px;
  background-color: rgba(37, 38, 39, 0.3);
  box-shadow: 2px 2px 5px;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1 px solid red;
`;

const ButtonStyle = styled.button`
  height: auto;
  background: #991c27;
  margin-bottom: 5%;
  margin-left: 0%;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 1.1rem;
  transition: 1s;
  font-family: "Alfa Slab One", cursive;
`;