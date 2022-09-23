import {useState} from 'react';
import'./App.css';

function App() {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(0);

  
  const sub = () => {
    
    resultado = Number(n1) * Number(n2)
    
  }

  


  return (
    <div>
      
      <label>Primeiro Numero</label>
      <br></br>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)}></input>
      <br></br>
      <label>Segundo Numero</label>
      <br></br>
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)}></input>
      <br></br><br></br>
      <button onClick={sub}>Calcular</button>
      <br></br><br></br>
      <label >{n1 * n2} </label>
    </div>
  );
}

export default App;
