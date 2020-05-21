import React from 'react';

class UserInput extends React.Component{
    render() {
        return(
            <div className='input-container'>
                <AddButton onClick={this.props.addButtonOnClick}/>
                <DiceList dice={this.props.diceButtons} onClick={(size) => this.props.onClick(size)}/>
            </div>
        );
    }
}

function DiceList(props){
    const diceButtons = props.dice.map((die, idx) => {
        return <DiceButton 
        key={`die-d${die}__${idx}`}
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

function AddButton(props){
    return(
        <button className='addBtn' onClick={props.onClick}>add</button>
    );
}

export default UserInput;