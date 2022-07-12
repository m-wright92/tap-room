import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
      <Keg 
        whenKegClicked={props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={keg.id}
        id={keg.id}
        ozCount={keg.ozCount}
        decrement={props.decrement}
      />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  decrement: PropTypes.func
}

export default KegList;