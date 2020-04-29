import React from 'react';
import MemoryCard from './MemoryCard';

class Board extends React.Component {
  
    state = {
      cards: [],
      flippedId: undefined,
      boardDisabled: false
    };
  
    componentWillReceiveProps(nextProps) {
      this.setState({ cards: nextProps.cards });  
    }
  
    Flip = (id) => {
  
      if(this.state.boardDisabled){
        return;
      }
  
      this.setState({boardDisabled: true});
  
      let cards = [ ...this.state.cards ];
      const flippedId = this.state.flippedId;
  
      const index = cards.findIndex(c => c.id === id);
  
      let card = {...cards[index]};
  
      card.visible = true;
  
      cards[index] = card;
  
      if(flippedId === card.matchId){
        const flippedIndex = cards.findIndex(c => c.matchId === flippedId && c.visible === true);
        let flippedCard = cards[flippedIndex];
  
        card.solved = true;
        card.disabled = true;
  
        flippedCard.solved = true;
        flippedCard.disabled = true;
  
        this.setState({
          flippedId: undefined,
          boardDisabled: false
        });
      }
      else if(flippedId === undefined){
        this.setState({flippedId: card.matchId});
        card.disabled = true;
        this.setState({boardDisabled: false});
      }
      else{
        this.setState({flippedId: undefined});
  
        cards.forEach(card => {
          card.disabled = true;
        });
  
        setTimeout(() => {
          const flippedIndex = cards.findIndex(c => c.matchId === flippedId && c.visible === true);
          let flippedCard = cards[flippedIndex];
  
          card.visible = false;
          flippedCard.visible = false;
  
          cards[index] = card;
          cards[flippedIndex] = flippedCard;
  
          cards.forEach(card => {
            if(!card.solved){
              card.disabled = false;
            }
          });
  
          this.setState({
            cards: cards,
            boardDisabled: false
          });
  
        }, 1000);
      }
  
      this.setState({
        cards: cards
      });
    }
  
    render() {
      return (
        <div className='board'>
          {this.state.cards.map(card => <MemoryCard key={card.id} card={card} onClick={this.Flip}/>)}
        </div>
      );
    }
  }

export default Board;