import React from "react";
import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
    defaultValue : "Helloooooo",
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

//Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

const AdditionalProps = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return(
        <Wrapper>
            <Input placeholder="A small text input" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" size="2em" />
        </Wrapper>
    );
}

export default AdditionalProps;