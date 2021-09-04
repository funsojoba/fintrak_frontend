import './App.css';
import ForgotPassword from './pages/forgotPassword';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/register';
import LogIn from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import IncomePage from './pages/income';
import ExpensePage from './pages/expense';
import EditIncome from './pages/editIncome';
import EditExpense from './pages/editExpense';
import SettingsPage from './pages/settings';
import BudgetPage from './pages/budget';


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

        {/* Add parameters later */}
        <Route path="/edit-income" exact>
          <EditIncome />
        </Route>
        
        <Route path="/edit-expense" exact>
          <EditExpense />
        </Route>
        
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        
        <Route path="/budget" exact>
          <BudgetPage />
        </Route>

      </Switch>
    </Router>

    </div>
  );
}

export default App;
