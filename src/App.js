import './App.css';
import ForgotPassword from './pages/forgotPassword';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/register';
import LogIn from './pages/login';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LogIn />
        </Route>

        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        
        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>


      </Switch>
    </Router>

    </div>
  );
}

export default App;
