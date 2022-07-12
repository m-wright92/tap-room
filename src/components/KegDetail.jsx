import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.brand}</h3>
      <h3>{keg.name}</h3>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};