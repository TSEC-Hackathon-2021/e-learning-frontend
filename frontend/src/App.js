import './App.css';
import Signup from "./components/signup"
import Login from './components/login'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
