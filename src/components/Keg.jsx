import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.name}</h3>
      <p>{props.price} - {props.alcoholContent}ABV</p>
    </React.Fragment>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg