import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import 'useNavigate'
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Register from './components/Auth/Register/Register.component';
import Login from './components/Auth/Login/Login.component';
import firebase from './server/firebase';
import { combinedReducers } from './store/reducer';
import { setUser } from './store/actioncreator';
import { AppLoader } from './components/AppLoader/AppLoader.component';

import 'semantic-ui-css/semantic.min.css';

const store = createStore(combinedReducers);

const Index = (props) => {
  const navigate = useNavigate(); // Use 'useNavigate' hook for navigation

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        navigate('/');
      } else {
        props.setUser(null);
        navigate('/login');
      }
    }, []);

    console.log('Debug', props.currentUser);
  });

  return (
    <>
      <AppLoader loading={props.loading && window.location.pathname === '/'} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  loading: state.channel.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

const ConnectedIndex = connect(mapStateToProps, mapDispatchToProps)(Index);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ConnectedIndex />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
