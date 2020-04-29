import React from 'react';
import Button from 'react-bootstrap/Button';
import Difficulty from './Difficulty';
import Board from './Board';

class Game extends React.Component {
    state = { 
      amount: 8,
      cards: []
    };
    
    changeDifficulty = async (amount) => {
      this.state.cards = [];
      this.setState({ amount: amount })
      await this.getCards(amount);
    }
  
    reset = async () => {
      this.state.cards = [];
      await this.getCards(this.state.amount);
    }
  
    getCards = async (amount) => {
      const halfAmount = amount / 2;
  
      let cards = [];

      const page = Math.floor(Math.random() * 100);
      const r = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${halfAmount}`);
      let body = await r.json();

      console.log(body);
      let i = 0;
      body.forEach(card => {

        const url = 'https://picsum.photos/id/' + card.id + '/150/200'

        cards.push({
            id: i,
            matchId: i,
            url: url,
            visible: false,
            disabled: false,
            solved: false
          });
    
          cards.push({
            id: i + halfAmount,
            matchId: i,
            url: url,
            visible: false,
            disabled: false,
            solved: false
          });
          i++;
      });
  
      //shuffle the deck
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
  
      this.setState({
        cards: cards
      });
    }
  
    componentDidMount(){
      this.getCards(this.state.amount);
    }
  
    render() {
      return (
        <div className='game'>
          <Board cards={this.state.cards} />
          <div className='controls'>
            <Difficulty onChange={this.changeDifficulty}/>
            <Button variant='secondary' onClick={this.reset}>Reset</Button>
          </div>
        </div>
      );
    }
  }

  export default Game;