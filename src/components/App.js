import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login'

function App() {
  // custom hook that acts like useState but persists data into local storage
  const [id, setId] = useLocalStorage('id')


  return (
    <>
      {id}
      {/* call the prop onIdSubmit because that's what happens when we submit form. It set the id as that state */}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
