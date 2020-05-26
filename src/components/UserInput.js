import React from 'react';
import Roll from '../scripts/Roll'

class UserInput extends React.Component{
    createBasicRoll(size){
        return new Roll(size);
    }

    render() {
        return(
            <div className='input-container'>
                <DiceList dice={this.props.diceButtons} 
                    onClick={(roll) => this.props.onClick(roll)} 
                    createBasicRoll={(size) => this.createBasicRoll(size)}/>
            </div>
        );
    }
}

function DiceList(props){
    const diceButtons = props.dice.map((die, idx) => {
        return <DiceButton 
                key={`die-d${die}__${idx}`}
                size={die}
                onClick={() => props.onClick(props.createBasicRoll(die))}/>
    });

    return diceButtons;
}

function DiceButton(props){
    return(
    <button className='diceBtn' 
        onClick={props.onClick}>d{props.size}</button>
    );
}



export default UserInput;