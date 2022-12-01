import './App.css';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="app">
      <Accordion title="What is React?">
        <p>React is a front end javascript framework</p>
      </Accordion>
      <Accordion title="Why use React?">
        <p>React is a favorite JS library among engineers</p>
      </Accordion>
    </div>
  )
}

export default App