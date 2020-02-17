import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewProduceForm(props){
  let _month = null;
  let _selection = null;

  var NewProduceFormStyles = {
    textAlign: "center",
    backgroundColor: "",
    margin: "20px",
    padding: "20px",
  }

  var inputStyles = {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    height: "15px",
    width: "150px",
  }

  function handleNewProduceFormSubmission(event) {
    event.preventDefault();
    props.onNewProduceCreation({month: _month.value, selection: _selection.value, id: v4()});
    _month.value = '';
    _selection.value = '';
  }

  return (
    <div style = {NewProduceFormStyles}>
     <form onSubmit={handleNewProduceFormSubmission}>
      <input style = {inputStyles}
        type='text'
        id='month'
        placeholder='Month'
        ref={(input) => {_month = input;}}/>
      <input style = {inputStyles}
        type='text'
        id='selection'
        placeholder='Selection'
        ref={(input) => {_selection = input;}}/>

      <button type='submit'>Add Produce!</button>
    </form>
  </div>
);
}

NewProduceForm.propTypes = {
  onNewProduceCreation: PropTypes.func
};

export default NewProduceForm;
