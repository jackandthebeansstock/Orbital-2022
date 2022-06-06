
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar/SearchBar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;


