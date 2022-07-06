import './App.css';
import GridLayout from './Components/GridLayout/GridLayout';
import Header from './Components/Header/Header';
import TopBanner from './Components/TopBanner/TopBanner';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <GridLayout/>
    </div>
  );
}

export default App;
