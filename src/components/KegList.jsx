import React from 'react';
import Keg from './Keg';

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
    name="beer"
    brand="Four Loko"
    price="$5"
    alcoholContent="5%"
  }
]

function KegList() {
  return (
    <React.Fragment>
      <Keg />
    </React.Fragment>
    
    )
}

export default KegList