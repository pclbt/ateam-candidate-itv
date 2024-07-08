import './App.css';
import useUniqNumber from './hooks/useUniqNumber';

function App() {
  const array = useUniqNumber();

  return (
    <div className="App">
      <h1>The result is:</h1>
        {array.join(', ')}
    </div>
  );
}

export default App;
