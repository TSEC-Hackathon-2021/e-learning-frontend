import './App.css';
import Signup from "./components/signup"
import Login from './components/login'
import Homepage from './components/homepage'
import {Route} from 'react-router-dom';
import './bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
