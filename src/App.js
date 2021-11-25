import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navbar/>
    <div className="conatiner">
      <div className="py-3">
        <Routes>
        <Route exact path="/" element={<Contacts />} />
        <Route exact path="/Contact/add" element={<AddContact/>} />
        <Route exact path="/contact/edit/:id" element={<EditContact/>} />
        </Routes>
      </div>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
