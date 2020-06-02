import React from 'react';
import Roll from '../scripts/Roll';

class CustomButtonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roll: new Roll()
        };
    }

    handleChange(event){
        const newRoll = Object.assign({}, this.state.roll, {[event.target.name]: event.target.value});

        this.setState({
            roll: newRoll
        });
    }

    render(){
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
                            value={this.state.roll.diceSize}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* number of dice */}
                        <FormRow inputID='numDice'
                            labelText='Number of Dice' 
                            value={this.state.roll.numDice}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* modifier to roll result */}
                        <FormRow inputID='postRollAdd'
                            labelText='Modifier to roll result' 
                            value={this.state.roll.postRollAdd}
                            handleChange={(event) => this.handleChange(event)} />
                        {/* number of rolls */}
                        <FormRow inputID='numRolls'
                            labelText='How many times to perform Roll?' 
                            value={this.state.roll.numRolls}
                            handleChange={(event) => this.handleChange(event)} />
                        <div className='input-row'>
                            <label htmlFor=''>Your Custom Roll:</label>
                            <input type='text' 
                                value={this.state.roll.toString()}
                                readOnly />
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
            <label htmlFor={props.inputID} className={`label-${props.inputID} input-label`}>
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