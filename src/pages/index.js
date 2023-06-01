import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './';
import WelcomeMessage from '';

import LoginPage from './LoginPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/mainpage">
            <MainPage />
          </Route>
          <Route path="/">
            <WelcomeMessage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
