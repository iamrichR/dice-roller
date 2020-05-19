import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/UserInput';
import Display from './components/Display'
import './css/index.css';
import './css/userInput.css';
import './css/display.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentRoll: {roll: '', result: 0},
            rollHistory: []
        };
    }

    onClickDice(size){
        const newRoll = {roll: `1d${size}`, result: this.roll(size)};
        const newHistory = this.state.rollHistory.concat(newRoll)
        this.setState({
            currentRoll: newRoll,
            rollHistory: newHistory
        });
        console.log(this.state.rollHistory);
    }

    roll = (n) => Math.floor(Math.random() * Math.floor(n)+1);

    render() {
        const basicDice = [2,4,6,8,10,12,20,100];

        return(
            <div className='container'>
                <UserInput onClick={(size) => this.onClickDice(size)} basicDice={basicDice}/>
                <Display currentRoll={this.state.currentRoll}/>
            </div>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);