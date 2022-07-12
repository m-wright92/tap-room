import React from 'react'
import PropTypes from 'prop-types'

class Keg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.ozCount
    };
  };

  render() {
    return (
      <React.Fragment>
        <div onClick={() => this.props.whenKegClicked(this.props.id)}>
          <h3>{this.props.brand} - {this.props.name}</h3>
          <p>{this.props.price} - {this.props.alcoholContent}ABV</p>
        </div>
        <button 
          onClick={() => this.props.decrement(this.props.id)}
        >
          Pour a glass
        </button>
        <p>Oz left: {this.props.ozCount}</p>
      </React.Fragment>
    );
  }
}

Keg.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  ozCount: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  decrement: PropTypes.func
};

export default Keg;