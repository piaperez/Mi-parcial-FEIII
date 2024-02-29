import React, { useState } from 'react';
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.trimStart() !== input1) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setSubmittedData({ input1, input2 });

    } else if (input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else {
      setErrorMessage('');
      setSubmittedData({ input1, input2 });
    }
  };

  return (
    <div>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ingresar tu nombre:</label>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <label>Ingresar tu musico favorito:</label>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    {errorMessage && <p>{errorMessage}</p>}
    {submittedData && <Card data={submittedData} />}
  </div>
  );
}

export default App;
