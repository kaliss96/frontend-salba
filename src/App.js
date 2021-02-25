import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Dashboard />
        </Switch>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
