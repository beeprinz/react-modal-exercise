import React, { Component} from 'react';
import styled from 'styled-components';


class ConfirmationModal extends Component {
    render() {
        const {close} = this.props;
        return <Overlay onClick={close}>
            <Container onClick={e => e.stopPropagation()}>
                <Header><h3>are you sure?</h3></Header>
                <Body><p>...you want to blow up the earth</p></Body>
                <Footer><button>Do It!</button>
                        <button onClick={close}>Nevermind</button>
                </Footer>
            </Container>
            </Overlay>
    }
}

const Overlay = styled.div`
background-color: rgba(0,0,0,0.5);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items:center`;
const Container = styled.div`
background-color: white;
padding: 20px;
max-width:500px;
width:60%;
min-height:300px;
display:flex;
flex-direction:column;
`;
const Header = styled.div``;
const Body = styled.div`
flex: 1;
display: flex;
padding: 20px;`;
const Footer = styled.div`
display: flex;
justify-content: flex-end;;
    button{
        -webkit-appearance: none;
        padding: 5px 15px;
        background-color: #dd0000;
        color:white;
        margin: 0 5px;
    }
`

export default ConfirmationModal;