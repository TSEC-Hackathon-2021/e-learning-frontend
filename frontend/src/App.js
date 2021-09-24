import './App.css';
import Signup from "./components/signup"
import Login from './components/login'
import Homepage from './components/homepage'
import Profile from './components/Profile/main'
import { ToastProvider } from 'react-toast-notifications';
import {Route} from 'react-router-dom';
import './bootstrap.min.css'
import CoursePage from './components/course/CoursePage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage}/>
      <ToastProvider autoDismissTimeout={2000}>
        <Route exact path='/profile' component={Profile}/>
      </ToastProvider>
      <Route exact path='/course/:id' component={CoursePage}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
