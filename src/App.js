import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [isVisibile, setIsVisibile] = useState(true);
  return (
    <div className="App">
      {isVisibile && <Counter />}

      <br/>

      <button onClick={() => setIsVisibile(!isVisibile)}>Toggle Counter</button>
    </div>

  );
}

export default App;
