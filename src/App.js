import './App.css';
import { Provider } from 'react-redux';
import ContactList from './components/contact-list/contacts';
import ContactInfo from './components/contact-list/contact-info';
import store from './store'
import React, { useState } from "react";

function App() {
  
  const handleShowForm = () =>{

  }
  return (
    <Provider store={store}>
      <ContactList />
      <ContactInfo />
    </Provider>
  );
}

export default App;
