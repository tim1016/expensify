/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// eslint-disable-next-line import/no-named-as-default-member
import AddExpense from '../components/AddExpense';
import NotFoundPage from '../components/NotFoundPage';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
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
  </Router>
);

export default AppRouter;
