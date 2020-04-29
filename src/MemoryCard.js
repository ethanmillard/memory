import React from 'react';
import back from './card.jpg';

class MemoryCard extends React.Component {
    render() {
        return (
        <div className='flip'>
            <div className={`memory-card ${this.props.card.visible ? 'flipped' : ''}`} onClick={() => this.props.onClick(this.props.card.id)} style={{ pointerEvents: this.props.card.disabled ? 'none' : 'auto' }}>
                <img className='face back' src={back} alt=''/>
                <img className='face front' src={this.props.card.url} alt=''/>
            </div>
        </div>
        );
    }
}

export default MemoryCard