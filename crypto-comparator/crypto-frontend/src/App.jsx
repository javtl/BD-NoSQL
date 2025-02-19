// src/App.jsx
import Header from './components/Header';
import CryptoList from './components/CryptoList';
import CryptoChart from './components/CryptoChart';
import './style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <CryptoList />
      <CryptoChart />
    </div>
  );
}

export default App;

