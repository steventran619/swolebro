// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {
  const [exercise, setExercise] = useState([]);
  const today = new Date();

  return (
    <>
      <Router>
        <header>
          <div id='appTitle'>
            <h1>💪 SwoleBro</h1>
          </div>
        </header>

        <Navigation />

        <main>
          <Route path="/" exact>
            <HomePage setExercise={setExercise} />
          </Route>

          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>

          <Route path="/edit-exercise">
            <EditExercisePage exercise={exercise} />
          </Route>
        </main>

        <footer>
          <p>&copy; {(today.getFullYear())} Steven Tran </p>
        </footer>

      </Router>
    </>
  );
}

export default App;