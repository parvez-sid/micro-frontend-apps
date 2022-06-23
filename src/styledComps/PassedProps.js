import React from "react";
import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const passedPropsComp = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return(
        <Wrapper>
            <Input defaultValue="Parvez" type="text" />
            <Input defaultValue="Siddiqi" type="text" inputColor="rebeccapurple" />
        </Wrapper>
    );
}

export default passedPropsComp;