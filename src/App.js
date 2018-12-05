import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Quote from './components/main';
import store from './store';

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Quote/>
      </div>
      </Provider>
    );
  }
}

export default App;
