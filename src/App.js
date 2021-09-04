import './App.css';
import ForgotPassword from './pages/forgotPassword';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/register';
import LogIn from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import IncomePage from './pages/income';
import ExpensePage from './pages/expense';


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

        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        
        <Route path="/income" exact>
          <IncomePage />
        </Route>

        <Route path="/expense" exact>
          <ExpensePage />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
