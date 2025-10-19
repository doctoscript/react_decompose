import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <div className="app">
      <Header /> {/* Header component */}
      <Welcome /> {/* Welcome component */}
      <Article /> {/* Article component */}
    </div>
  );
}

export default App;
