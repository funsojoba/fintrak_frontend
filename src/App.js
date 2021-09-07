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
import AddBudget from './pages/addBudget';
import EditBudget from './pages/editBudget';
import Loader from 'react-loader-spinner'
import ProtectedRoute from './protectedRoute';
import VerifyAccount from './pages/verifyAccount';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import getStore from './redux/store'

export const { store, persistor } = getStore()


function App() {
  return (
    <Provider store={store} >

      <div className="App">
        <Router>
      <PersistGate loading={<Loader type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} />} persistor={persistor}>
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
            <Route path="/verify" exact>
              <VerifyAccount />
            </Route>

            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            <ProtectedRoute path="/income" exact component={IncomePage} />
            <ProtectedRoute path="/expense" exact component={ExpensePage} />
            <ProtectedRoute path="/settings" exact component={SettingsPage} />
            <ProtectedRoute path="/budget" exact component={BudgetPage} />
            <ProtectedRoute path="/add-budget" exact component={AddBudget} />
            <ProtectedRoute path="/edit-budget/:id" exact component={EditBudget} />
            <ProtectedRoute path="/edit-income/:id" exact component={EditIncome} />
            <ProtectedRoute path="/edit-expense/:id" exact component={EditExpense} />
          </Switch>
      </PersistGate>
      </Router>

      </div>
    </Provider>
  );
}

export default App;
