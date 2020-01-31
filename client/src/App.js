import React, {useState} from 'react';
import './App.css';
import Form from './Form.js'
import BodyPart from './BodyPart.js'



function App() {
  const [work, setWork] = useState([])

  const addToList = names => {
    const newName = setWork([...work, names])
  }

  return (
    <div className="App">
      <h1>Journal Entries</h1>
      {work.map((body) => ( <BodyPart name={body.name}/>))}
     <Form addToList={addToList}/>
    </div>
  );
}

export default App;
