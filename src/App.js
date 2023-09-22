import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Navigation from './Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;