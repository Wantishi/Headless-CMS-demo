import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
