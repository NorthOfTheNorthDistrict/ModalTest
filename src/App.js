import { Orders } from './Modal1/orders';
import { Modal2 } from './Modal2/index';
import { Revise } from './Modal3/revise';
import { OrderTable } from  './Modal4/orderTable';
import { EditRoomType } from './Modal5/editRoomType';
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
      <br/>
      <br/>
      <OrderTable/>
      <br/>
      <br/>
      <EditRoomType/>
    </div>
  );
}

export default App;
