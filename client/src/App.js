import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './actions/actions';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);

  useEffect(() => {
    if(token) {
      // alert('token available')
      dispatch(loadUser());
    }
  }, [])

  return (
    <Router >
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
