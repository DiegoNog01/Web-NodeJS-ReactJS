import {useState} from 'react';
import'./App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const somar = event => {
    setCount(current => current + 1);
  };

  const sub = event => {
    setCount(current => current - 1);
  };


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={somar}>+</button>
      <br></br>
      <button onClick={sub}>-</button>
    </div>
  );
};

export default App;
