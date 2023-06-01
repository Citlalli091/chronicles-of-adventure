import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components';
import WelcomeMessage from './components';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
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
