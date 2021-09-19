import logo from './assets/img/logo.svg';
import './assets/style/App.css';
import NoteList from './components/NoteList';
import React, { Component } from 'react';
class App extends Component {

  render() {

    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <form>

          <input type="text" placeholder="Title"></input>
          <textarea placeholder="Write your note"></textarea>
          <button>Create</button>

        </form>

        <NoteList />

      </div>

    );
  }

}

export default App;
