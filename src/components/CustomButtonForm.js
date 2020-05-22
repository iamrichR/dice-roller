import React from 'react';

function CustomButtonForm(props){
    return(
        <div className='modal-input-container'>
            <h2>Add a custom Dice</h2>
            <p>Please enter custom dice size</p>
            <form className='custom-button-form'>
                <label for='input-roll-details'>Custom Roll</label>
                <input id='input-roll-details' type='text' name='input-roll-details'></input>
                <input id='input-submit' type='submit' name='input-submit'>Submit</input>
            </form>
            <button onClick={() => props.closeModal()}>Close</button>
        </div>
    );
}

export default CustomButtonForm;