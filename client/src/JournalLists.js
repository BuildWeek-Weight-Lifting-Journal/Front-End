import react, {useState, useEffect} from 'react'
import axios from 'axios'


export default function JournalLists() {
   const [exercise, setExercise] = useState([])


   useEffect(() => {
     axios.get()
        .then(response => {
            console.log()
        })
        .catch(err => {
            console.log(err);
        })

   })

   return(
       <div>
           {exercise.map(placeholder => ())}
       </div>
   );
  }