import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

function JournalCard(props) {
   const { updated_at, region, id } = props.journal;
   const { journals, setJournals } = props;
   const date = updated_at.split(" ");

   const handleClick = e => {
      e.preventDefault();
      axios
         .delete(`/restricted/journals/${id}`)
         .then(res => {
            const newJournals = journals.filter(journal => {
               return journal.id !== id;
            });
            setJournals(newJournals)
         })
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
   )
}

export default JournalCard;

/**************Styles************/
const RegionStyled = styled.div`
  
 
`;
const StyledData = styled.div`
  
`;
const Exercise = styled.div`
  
`;

const Container = styled.div`
  
`;

const ButtonStyle = styled.button`
 
`;
