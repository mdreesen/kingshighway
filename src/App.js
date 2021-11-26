import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import GlobalMinistries from './pages/GlobalMinistries';
import Contact from './pages/Contact';

// import Appbar (navigation)
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/global-ministries' component={GlobalMinistries} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
