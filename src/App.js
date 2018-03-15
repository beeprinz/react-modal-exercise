import React, { Component } from 'react';
import styled from 'styled-components';
import ConfirmationModal from './components/ConfirmationModal';

class App extends Component {
  state = {
    open: false,
  }

  toggleOpenModal = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  // above is the same as
  // const toggleOpenModal = () => {
  // }

  render() {
    const { open } = this.state;
    return (
      <MainContainer>
      <h1>Hello</h1>
      <a onClick={this.toggleOpenModal}>Blow up Earth</a>
      { open && <ConfirmationModal close={this.toggleOpenModal} /> }
      {/* && logical operator, if open is true it will also do the thing next to it, if false stop doing the thing */}

      </MainContainer>
    );
  }
}

const MainContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

`;

export default App;
