import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route,withRouter ,Redirect} from 'react-router-dom';
import Listing from './components/script/Pages/Listing';
import Navbar from './components/script/Header/Navbar';
import Corousal from './components/script/Pages/Carousel';
import Hero from './components/script/Pages/Hero';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Route exact path=""><Redirect to="/listing" /></Route>
      <Route exact path="/listing" component={Listing}></Route>
      <Route exact path="/carousel" component={Corousal}></Route>
      <Route exact path="/hero" component={Hero}></Route>

    </div>
    </Router>
    </Provider>
    
  );
}

export default App;
