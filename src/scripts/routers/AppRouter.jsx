import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import AddExpense from '../components/AddExpense.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import EditExpense from '../components/EditExpense.jsx';
import HelpPage from '../components/HelpPage.jsx';
import Header from '../components/Header.jsx';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/editexpense" component={EditExpense}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;