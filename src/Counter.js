import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledCounter = styled.div`
    padding: 4em;
    background: papayawhip;
`;
const Paragraph = styled.p`
    color : ${"green"};
    font-size : 3em;
`;
const Button = styled.button`
    /* Adapt the colors based on primary prop */

    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 1
        }
    }
    addOne = () => {
        this.props.dispatch({ type: 'ADD_ONE' });
    }

    minusOne = () => {
        this.props.dispatch({ type: 'MINUS_ONE' });
    }
    render() {
        const { number } = this.props
        return (
        <div className="App" >
            <header className="App-header">
                <StyledCounter>
                    <Paragraph>{number}</Paragraph>
                    <Button primary onClick={this.minusOne}>-</Button>
                    <Button primary onClick={this.addOne}>+</Button>
                </StyledCounter>
            </header>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      number: state.number
    };
}
export default connect(mapStateToProps)(Counter);