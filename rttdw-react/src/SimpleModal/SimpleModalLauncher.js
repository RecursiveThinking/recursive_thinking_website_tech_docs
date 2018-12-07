import React, { Component } from 'react';
// import injectSheet from 'react-jss';
// import styles from './SimpleModalLauncherStyles'; // Import styles
import SimpleModal from './SimpleModal'; // Import SimpleModal component
// import PropTypes from 'prop-types';
import './SimpleModalLauncher.css'

// Declaration of the component as React Class Component
class SimpleModalLauncher extends Component {
  
  // Init of the component before it is mounted.
  // Sets the modal visibility (showModal) to false.
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  
  // Handle the visibility of the modal.
  // If `state.showModal` is false, sets it to true,
  // if is true, sets it to false.
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    // const { sheet: { classes } } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <img
          src={require("./committing1.jpg")}
          alt="img"
          // className='modalButton'
          onClick={() => this.handleToggleModal()}
        >
          
        </img>

        {showModal &&
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            <img src={require("./committing1.jpg")} alt="Nature" />
          </SimpleModal>}
      </div>
    );
  }
}

// SimpleModalLauncher.propTypes = {
//   buttonLabel: PropTypes.string.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
//   sheet: PropTypes.object,
//   classes: PropTypes.object,
// };

export default SimpleModalLauncher