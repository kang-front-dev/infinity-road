import Road from './components/Road';
import './styles/app.css';
import Counter from './components/Counter'

function App() {
  let windowWidth = window.innerWidth
  let columns = 8
  let cellSize = Math.round((windowWidth / 1.5 - 20) / columns) < 80 ? Math.round((windowWidth / 1.5 - 40) / columns) : 80

  return (
    <div className="App">
      <div className="wrapper" id='wrapper'>
        <Road columns={columns} cellSize={cellSize}/>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
