import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import store from "./store"
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Navbar/>
    <div className="conatiner">
      <div className="py-3">
        <Contacts/>
      </div>
    </div>
    </div>
    </Provider>
  );
}

export default App;
