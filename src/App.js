import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contacts/contact.js'
import Table from './components/Contactlist/contactlist'


  let people = [
    {
      name: 'Mireia',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: false,
    },
    {
      name: 'Onis',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: true,
    },
    {
      name: 'Edu',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: false,
    },
    {
      name: 'Margarita',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: true,
    },
    {
      name: 'Marta',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: false,
    },

  ];



function App(props) {
  return (
    <div className="App">
      <header className="App-header">

      <div className="container">
        <Table contact={people}/>
      </div>
      </header>
    </div>
  );
}

export default App;
