import React, { Component } from 'react'
import NewKegForm from './NewKegForm'
import KegList from './KegList'
import KegDetail from './KegDetail'


export default class KegController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  decrement = (id) => {
    const tempList = this.state.mainKegList.map((keg) => {
      if (keg.id === id) {
        if (keg.ozCount > 0) {
          return {
            ...keg,
            ozCount: keg.ozCount - 16
          };
        } else {
          return keg;
        }
      }
      return keg;
    });
    this.setState({ mainKegList: tempList });
  };
  

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        formVisibleOnPage: false
      });
    }else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newKegList, 
      formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render() {
    let currentlyVisibleContent = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleContent = (
        <KegDetail keg={this.state.selectedKeg} />
      );
      buttonText = "Back to Keg List";
    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        );
      buttonText = "Back to Keg List";
    }else {
      currentlyVisibleContent = (
      <KegList 
        kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg}
        decrement={this.decrement} />
      );
      buttonText = "Add a New Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleContent}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
