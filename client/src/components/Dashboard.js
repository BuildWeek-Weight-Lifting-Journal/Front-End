import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext.js';
import axios from 'axios';
import JournalList from './journals/JournalList.js';
import { Link } from 'react-router-dom';

function Dashboard(props) {
   const [journals, setJournals] = useState([]);
   const { user } = useContext(UserContext);

   const upper = journals.filter(item => {
      return item.region === 'Upper Body'
   });

   const lower = journals.filter(item => {
      return item.region === 'Lower Body'
   });

   const core = journals.filter(item => {
      return item.region === 'Core'
   });

   useEffect(() => {
      axios
         .get('restricted/journals')
         .then(results => {
            setJournals(results.data.journals.filter(item => {
               return item.userId === user.id;
            }));
         })
         .catch(error => 
            console.log('ERROR', error))

   }, [user])
}

return (
   <div>
      {/* create a logo on top to add state objects */}
      {user.firstName}
      {user.lastName}

      {/* journals logged */}
      Journals Logged: {journals.length}

      {/* Logged journals by body region  */}

      <div class='Journals-Container'>
         <div class='styled-region'>
         Upper Body
         {upper.length}
         </div>

         <div class='styled-region'>
         Lower Body
         {lower.length}
         </div>

         <div class='styled-region'>
         Core
         {core.length}
         </div>
      </div> {/* Journals-Container closed */}

      <Link to={`/newjournal/${user.id}`}>
         <button>Create New Journal</button>
      </Link>

      <JournalList journals={journals} setJournals={setJournals} />
   </div>
)

export default Dashboard