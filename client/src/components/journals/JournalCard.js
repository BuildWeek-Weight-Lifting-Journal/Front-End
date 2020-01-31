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
      <div>
         {region}
         Date Created: {date[0]}
         Exercises: {props.journalExercises.length}
         <button onClick={e => handleClick(e)}>Delete</button>
      </div>
   )
}

export default JournalCard;
