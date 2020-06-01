import React from 'react';

class CustomButtonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numRolls: 1,
            numDice: 1,
            diceSize: 20,
            postRollAdd: 0
        };
    }

    handleChange(event){
        if(event.target.value === ''){
            this.setState({
                [event.target.name]: event.target.value
            });
        } else{
            const newValue = parseInt(event.target.value);
            if(Number.isInteger(newValue)){
                this.setState({
                    [event.target.name]: newValue
                });
            }
        }
    }

    render(){
        // const rollDisplayStr = `${this.state.numRolls <= 1 ? '' : this.state.numRolls} ( ${this.state.numDice}d${this.state.diceSize}+${this.state.postRollAdd} )`;
        const repeatDetailStr = this.state.numRolls <= 1 ? '' : ("roll " + this.state.numRolls + " times");
        const innerRollStr = `${this.state.numDice}d${this.state.diceSize}+${this.state.postRollAdd}`;
        const rollDisplayStr = `( ${innerRollStr} ) ${repeatDetailStr}`;

        return(
            <div className='modal-content'>
                <div className='modal-input-container'>
                    <div className='form-heading'>
                        <h3>Add a custom Dice</h3>
                        <p>Please enter custom dice size</p>
                        <small>(Number values only)</small>
                    </div>
                    <form className='custom-btn-form' onSubmit={this.props.handleSubmit}>
                        {/* dice size */}
                        <FormRow inputID='diceSize'
                            labelText='Dice Size (dX)' 
                            value={this.state.diceSize}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* number of dice */}
                        <FormRow inputID='numDice'
                            labelText='Number of Dice' 
                            value={this.state.numDice}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* modifier to roll result */}
                        <FormRow inputID='postRollAdd'
                            labelText='Modifier to roll result' 
                            value={this.state.postRollAdd}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* "do you want to run this roll multiple times?" */}
                        <FormRow inputID='numRolls'
                            labelText='How many times to perform Roll?' 
                            value={this.state.numRolls}
                            handleChange={(event) => this.handleChange(event)} />
                        <div className='input-row'>
                            <label for=''>Your Custom Roll:</label>
                            <input type='text' 
                                value={rollDisplayStr}
                                readonly />
                        </div>
                        <div className='input-row'>
                            <input id='input-submit' className='input-submit modal-btn' type='submit' name='input-submit' />
                        </div>
                    </form>
                    <button className='modal-close-btn modal-btn' onClick={() => this.props.closeModal()}>Close</button>
                </div>
            </div>
        );
    }
}

function FormRow(props){
    return(
        <div className='input-row'>
            <label for={props.inputID} className={`label-${props.inputID} input-label`}>
                {props.labelText}
            </label>
            <input id={`input-${props.inputID}`} className='input-text' 
            type='text' name={props.inputID}
            value={props.value} 
            onChange={(event) => props.handleChange(event)} />
        </div>
    );
}

export default CustomButtonForm;