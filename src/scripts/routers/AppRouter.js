import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import NotFoundPage from '../components/NotFoundPage';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
