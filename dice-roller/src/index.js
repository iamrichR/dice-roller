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
            currentResult: {roll: '', result: 0},
            rollHistory: []
        };
    }

    componentDidUpdate(){
        this.scrollHistoryDown();
    }

    onClickDice(size){
        const newRoll = {roll: `1d${size}`, result: this.roll(size)};
        const newHistory = this.state.rollHistory.concat(newRoll)
        this.setState({
            currentResult: newRoll,
            rollHistory: newHistory
        });
    }

    roll = (n) => Math.floor(Math.random() * Math.floor(n)+1);

    scrollHistoryDown(){
        let historyDisplay = document.getElementById('result-history-list');

        historyDisplay.scrollTop = historyDisplay.scrollHeight;
    }

    render() {
        const basicDice = [2,4,6,8,10,12,20,100];

        return(
            <div className='container'>
                <UserInput onClick={(size) => this.onClickDice(size)} basicDice={basicDice}/>
                <Display currentResult={this.state.currentResult} rollHistory={this.state.rollHistory}/>
            </div>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);