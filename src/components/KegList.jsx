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
    name: "malt liquor",
    brand: "Four Loko",
    price: "$5",
    alcoholContent: "5%"
  }
]

function KegList() {
  return (
    <React.Fragment>
      {mainKegList.map((keg, index) => 
      <Keg name={keg.name}
       brand={keg.brand}
       price={keg.price}
       alcoholContent={keg.alcoholContent}
       key={index}/>
      )}
    </React.Fragment>
    
    )
}

export default KegList