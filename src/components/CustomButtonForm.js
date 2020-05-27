import React from 'react';

class CustomButtonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            diceSizeValue: 3
        };
    }

    handleChange(event,keyStr){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div className='modal-content'>
                <div className='modal-input-container'>
                    <div className='form-heading'>
                        <h3>Add a custom Dice</h3>
                        <p>Please enter custom dice size</p>
                    </div>
                    <form className='custom-btn-form' onSubmit={this.props.handleSubmit}>
                        <div className='input-row'>
                            {/* dice size */}
                            <label for='input-dice-size' className='label-dice-size'>Dice Size (dX)</label>
                            <input id='input-dice-size' className='input-text' 
                            type='text' name='diceSizeValue'
                            value={this.state.diceSizeValue} 
                            onChange={(event) => this.handleChange(event, 'diceSizeValue')} />
                            {/* number of dice */}
                            {/* modifier to dice size */}
                            {/* modifier to roll result */}
                            {/* "do you want to run this roll multiple times?" */}
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

export default CustomButtonForm;