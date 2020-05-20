import React from 'react';

class UserInput extends React.Component{
    render() {
        return(
            <div className='input-container'>
                <DiceList dice={this.props.basicDice} onClick={(size) => this.props.onClick(size)}/>
            </div>
        );
    }
}

function DiceList(props){
    const diceButtons = props.dice.map((die) => {
        return <DiceButton 
        key={`die-${die}`}
        size={die} 
        onClick={() => props.onClick(die)}/>
    });

    return diceButtons;
}

function DiceButton(props){
    return(
    <button className='diceBtn' onClick={props.onClick}>d{props.size}</button>
    );
}

export default UserInput;