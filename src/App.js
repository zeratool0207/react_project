import logo from './logo.svg';
import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
        <h2>Let's get started</h2>
        <ExpenseItem />
    </div>
  );
}

export default App;
