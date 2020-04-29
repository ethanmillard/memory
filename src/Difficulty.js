import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Difficulty extends React.Component {
    render() {
      return (
        <ListGroup horizontal defaultActiveKey='#easy'>
          <ListGroup.Item action href='#easy' onClick={() => this.props.onChange(8)}>Easy</ListGroup.Item>
          <ListGroup.Item action href='#medium' onClick={() => this.props.onChange(12)}>Medium</ListGroup.Item>
          <ListGroup.Item action href='#hard' onClick={() => this.props.onChange(16)}>Hard</ListGroup.Item>
        </ListGroup>
      );
    }
}

export default Difficulty;