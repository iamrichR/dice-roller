import React from 'react';

function CustomButtonForm(props){
    return(
        <div className='modal-add-input'>
            <h2>Add a custom Dice</h2>
            <p>Please enter custom dice size</p>
            <form>
                <input type='text'></input>
            </form>
            <button onClick={() => props.closeModal()}>Close</button>
        </div>
    );
}

export default CustomButtonForm;