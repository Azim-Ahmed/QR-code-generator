import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GettAllData from './pages/GetAllData';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data">
          <GettAllData />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
