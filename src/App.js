import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Search/> */}
      <Weather/>
    </div>
  );
}

export default App;
