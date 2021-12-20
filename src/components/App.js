import React, { useState } from 'react';
import Login from './Login'

function App() {
  const [id, setId] = useState()


  return (
    <>
      {id}
      {/* call the prop onIdSubmit because that's what happens when we submit form. It set the id as that state */}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
