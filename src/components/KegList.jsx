import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

const mainKegList = [
  {
    name: "beer",
    brand: "PBR",
    price: "$3",
    alcoholContent: "5%"
  },
  {
    name: "beer",
    brand: "Rainier",
    price: "$3",
    alcoholContent: "5%"
  },
  {
    name: "malt liquor",
    brand: "Four Loko",
    price: "$5",
    alcoholContent: "5%"
  }
]

function KegList(props) {
  return (
    <React.Fragment>
      {mainKegList.map((keg, index) => 
      <Keg 
        whenListItemClicked={props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}
        id={keg.id}
      />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;