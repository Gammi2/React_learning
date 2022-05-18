import './App.css';
import Hello from './Hello';

function App() {
  const name = 'Дмитрий'
  return (
    <div>
      <Hello name={name} />
    </div>
  );
}

export default App;
