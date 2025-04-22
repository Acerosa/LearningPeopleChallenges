import './App.css';
import Deconstruction from './Deconstruction/Deconstruction';

// Intentionally flawed user data for destructuring challenge!

function App() {
  return (
    <div className="container">
      <h1>Destructuring Challenge</h1>
      <p>
        The cards below use <b>incorrect destructuring</b> of user data.
        Can you spot the mistakes? Fix the destructuring so every card displays correctly!
      </p>
      <Deconstruction />
    </div>
  );
}

export default App;
