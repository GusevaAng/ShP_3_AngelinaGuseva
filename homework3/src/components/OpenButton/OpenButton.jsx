import React from 'react'
import List from './List/List.jsx'
import './OpenButton.scss'


class OpenButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {openButton: false};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        openButton: !state.openButton
      }));
    }
  
    render() {
      return (
        <div>
          <List opening={this.state.openButton} /> 
          <button onClick={this.handleToggleClick}>
            {this.state.openButton ? 'Скрыть список' : 'Показать список компетенций'}
          </button>
        </div>
      );
    }
  }

  export default OpenButton