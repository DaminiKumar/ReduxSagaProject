import React, { Component, lazy, Suspense } from 'react';
//import UsersComponent from './components/UsersComponent';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import AddUserComponent from './components/AddUserComponent';
import ViewByUserId from './components/ViewByUserId';
import SortUsers from './components/SortingComponent';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (

    <Router>
      <div>
        <nav >
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">All Users</Link>
            </li>
            <li>
              <Link to="/sortUsers">Sort Users</Link>
            </li>
            <li>
              <Link to="/viewById">User By Id</Link>
            </li>
            
          </ul>
        </nav>


        <Switch>
        
          <Route path="/users">
          <Suspense fallback={<div>Loading.....</div>}>
            <UsersComponent></UsersComponent>
            </Suspense>
          </Route>
          <Route path="/viewById">
            <ViewByUserId></ViewByUserId>
          </Route>
          <Route path="/sortUsers">
            <SortUsers></SortUsers>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    /*<div className="App">
      <ViewByUserId></ViewByUserId>
      <Suspense fallback={<div>Loading.....</div>}>
      <UsersComponent />
      </Suspense>
       
    </div>*/
  );
}

export default App;