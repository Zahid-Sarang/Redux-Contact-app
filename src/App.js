import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import AddContact from './components/contacts/AddContact';




function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navbar/>
    <div className="conatiner">
      <div className="py-3">
        <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/Contact/add" element={<AddContact />} />
        </Routes>
      </div>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
