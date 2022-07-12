import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      ozCount: 124,
      id: v4()
    });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }
  
  return (
    <div>
      <h3>New Keg Form</h3>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='text'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          placeholder='Alcohol Content'
          ref={(input) => {_alcoholContent = input;}}/>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;