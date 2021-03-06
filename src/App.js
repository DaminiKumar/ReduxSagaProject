import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/HomeComponent';
//import UsersComponent from './components/UsersComponent';
import AddUserComponent from './components/AddUserComponent';
import ViewByUserId from './components/ViewByUserId';
import SortByTitle from './components/SortByTitleComponent';
import SortByBody from './components/SortByBodyComponent';
import SortByUserId from './components/SortByUserIdComponent';
import SortById from './components/SortByIdComponent';
import DeleteUser from './components/DeleteUserComponent';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (

    <Router>
      <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/users">All Users</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/sortUsersById">Sort Users By Id</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/sortUsersByUserId">Sort Users By User Id</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/sortUsersByTitle">Sort Users By Title</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/sortUsersByBody">Sort Users By Body</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewById">Find Users</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/add">Add User</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/delete">Delete User</a>
            </li>
          </ul>
        </nav>




        <Switch>

          <Route path="/add">
            <AddUserComponent></AddUserComponent>
          </Route>

          <Route path="/users">
            <Suspense fallback={<div>Loading.....</div>}>
              <UsersComponent></UsersComponent>
            </Suspense>
          </Route>

          <Route path="/viewById">
            <ViewByUserId></ViewByUserId>
          </Route>

          <Route path="/delete">
            <DeleteUser></DeleteUser>
          </Route>

          <Route path="/sortUsersById">
            <SortById></SortById>
          </Route>

          <Route path="/sortUsersByTitle">
            <SortByTitle></SortByTitle>
          </Route>

          <Route path="/sortUsersByBody">
            <SortByBody></SortByBody>
          </Route>

          <Route path="/sortUsersByUserId">
            <SortByUserId></SortByUserId>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;