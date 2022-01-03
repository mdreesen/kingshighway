import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Churches from './pages/About/churches';
import ChurchGary from './pages/About/Church/Gary';
import ChurchLansing from './pages/About/Church/Lansing';
import Leaders from './pages/About/leaders';
import Give from './pages/Give';
import GlobalMinistries from './pages/GlobalMinistries';
import PrayerRequest from './pages/PrayerRequest';

// import Appbar (navigation)
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Sub links for about */}
          <Route exact path="/churches" component={Churches} />
          <Route exact path="/leaders" component={Leaders} />
          {/* Sub links for churches */}
          <Route exact path="/churches/gary" component={ChurchGary} />
          <Route exact path="/churches/lansing" component={ChurchLansing} />
          {/* End Sub links for churches */}
          {/* End sub links */}
          <Route exact path="/give" component={Give} />
          <Route exact path='/global-ministries' component={GlobalMinistries} />
          <Route exact path='/prayer' component={PrayerRequest} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
