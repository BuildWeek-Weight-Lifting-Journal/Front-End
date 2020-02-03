import React, {useState} from 'react'

 const Form = props => {
    
    const [name, setName] = useState({ name: ""});

    const handleChange = event => {
        setName({ ...name, [event.target.name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
         const newWorkout = {
           ...name,
           id: Date.now()
         };
        props.addToList(newWorkout);
        setName({ name: ""});
      };

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input 
            type="text"
            value={name.name}
            id="name"
            name="name"
            onChange={handleChange}
            ></input>
             <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Form;