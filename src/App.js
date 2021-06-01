import React, { Component, lazy, Suspense } from 'react';
//import Users from './components/UsersComponent';
import './App.css';
import AddUserComponent from './components/AddUserComponent';
import ViewByUserId from './components/ViewByUserId';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    <div className="App">
      <ViewByUserId></ViewByUserId>
      <Suspense fallback={<div>Loading.....</div>}>
      <UsersComponent />
      </Suspense>
       
    </div>
  );
}

export default App;