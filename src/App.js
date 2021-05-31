import React, { Component, lazy, Suspense } from 'react';
//import Users from './components/UsersComponent';
import './App.css';
import AddUserComponent from './components/AddUserComponent';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    <div className="App">
      <AddUserComponent/>
      <Suspense fallback={<div>Loading.....</div>}>
      <UsersComponent />
      </Suspense>
    </div>
  );
}

export default App;