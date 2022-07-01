import { Orders } from './Modal1/orders';
import { Modal2 } from './Modal2/index';
import { Revise } from './Modal3/revise';
import './App.css';

function App() {
  return (
    <div className="App">
      <Orders/>
      <br/>
      <br/>
      <Modal2/>
      <br/>
      <br/>
      <Revise/>
    </div>
  );
}

export default App;
