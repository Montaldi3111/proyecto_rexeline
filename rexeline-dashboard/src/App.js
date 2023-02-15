import './App.css'
import Reservation from './components/Reservation'
import Table from './components/Table'

function App() {
  return (
    <div className='home'>
      <h1>Rexeline</h1>
      <Table estado={1}/>
    </div>
  );
}

export default App;
