import Home from './components/Page/Home';
import About from './components/Page/About';
import Create from './components/Page/Create';
import Edit from './components/Page/Edit';
import Navbar from './components/Shared/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/quotes/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
