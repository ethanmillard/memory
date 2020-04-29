import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Game from './Game';
import './Board.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>MEMORY</Navbar.Brand>
        </Navbar>
        <Game />
      </div>
    );
  }
}

export default App;