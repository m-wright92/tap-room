import React from 'react'
import Keg from './Keg';

function KegList() {
  return (
    <React.Fragment>
      <Keg 
        name="beer"
        brand="PBR"
        price="$3"
        alcoholContent="5%"/>
      <Keg 
        name="beer"
        brand="Rainier"
        price="$3"
        alcoholContent="5%"/>
    </React.Fragment>
    
  )
}

export default KegList