import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/UserInput';
import CustomButtonForm from './components/CustomButtonForm';
import Display from './components/Display'
import Modal from 'react-modal';

import '../node_modules/normalize.css/normalize.css';
import './css/index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentResult: {roll: '', result: 0},
            rollHistory: [],
            customButtons: [],
            modalIsOpen: false
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

    showAddButtonModal(){
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        });
    }

    handleSubmit(event){
        const newValue = parseInt(event.target.elements[0].value);
        event.preventDefault();
        if(Number.isInteger(newValue)){
            const newCustomButtons = this.state.customButtons.concat([newValue]);
            this.setState({
                customButtons: newCustomButtons
            });
            this.closeModal();
        }
    }

    render() {
        const basicDice = [2,4,6,8,10,12,20,100];

        return(
            <div className='container'>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.closeModal()}
                >
                    <CustomButtonForm closeModal={() => this.closeModal()}
                        handleSubmit={(event) => this.handleSubmit(event)}/>
                </Modal>
                <UserInput onClick={(size) => this.onClickDice(size)} 
                    diceButtons={this.state.customButtons.length === 0 ?
                    basicDice : basicDice.concat(this.state.customButtons)} />
                <Display currentResult={this.state.currentResult} 
                    rollHistory={this.state.rollHistory}
                    addButtonOnClick={() => this.showAddButtonModal()} />
            </div>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);