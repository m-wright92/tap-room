import React, { Component } from 'react'


export default class KegController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      kegList: [],
      selectedKeg: null
    };
  }

  render() {
    return (
      <div>Welcome to KegLandia</div>
    )
  }
}
