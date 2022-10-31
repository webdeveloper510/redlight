import logo from './logo.svg';
import './App.css';
import Index from './Route/Rout';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <div className="App">
      <Index/>
      <ToastContainer/>
    </div>
  );
}

export default App;
