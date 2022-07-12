import React, { Component } from 'react'
import NewKegForm from './NewKegForm'
import KegList from './KegList'


export default class KegController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      kegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.formVisibleOnPage) {
      this.setState({formVisibleOnPage: false});
    } else {
      this.setState({formVisibleOnPage: true});
    }
  }

  render() {
    let currentlyVisibleContent = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm />;
      buttonText = "Return to Keg List";
    }else {
      currentlyVisibleContent = <KegList />;
      buttonText = "Add Keg";
    };

    return (
      <React.Fragment>
        {currentlyVisibleContent}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
