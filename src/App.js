import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Leaders from './pages/Leaders';
import Give from './pages/Give';
import GlobalMinistries from './pages/GlobalMinistries';
import PrayerRequest from './pages/PrayerRequest';

// import Appbar (navigation)
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* Sub links for about */}
          <Route exact path="/location/Gary" component={About} />
          <Route exact path="/location/Michigan" component={About} />
          <Route exact path="/location/Pakistan" component={About} />
          <Route exact path="/location/Africa" component={About} />
          <Route exact path="/leaders" component={Leaders} />
          {/* End sub links */}
          <Route exact path="/give" component={Give} />
          <Route exact path='/global-ministries' component={GlobalMinistries} />
          <Route exact path='/prayer' component={PrayerRequest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
