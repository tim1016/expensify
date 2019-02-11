import React from 'react';
import Modal from 'react-modal';

const OptionModal = props =>(
    
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel={props.selectedOption}
    onRequestClose={props.closeModal}
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p> {props.selectedOption} </p>}
    <button onClick={props.closeModal}> &times; </button>
    </Modal>

)

export default OptionModal;