import React from "react";
import styled from 'styled-components'
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  // text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Text = styled('p')`
  font-size : 4em;
  color : ${props => props.name ? "tomato" : "green"}
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

// A new component based on above Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => 
<Button {...props} children={props.children.split('').reverse()} />

const MyComponent = styled.div`background-color: green;`;

const BasicComp = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return(
      <>
        <Wrapper>
          <Title id="title">Hello World!</Title>
          <Text name>Hello Parvez!!!</Text>
          <Button onClick={() => alert('It works!')}>Normal</Button>
          <Button as="a" href="#title">Link with Button styles</Button>
          <TomatoButton as="a" href="//www.google.com" target="_blank">Overridden Button</TomatoButton>

          <Button primary as={ReversedButton}>Link with Reversed button text</Button>
        </Wrapper>
        <MyComponent className="red-bg">
          Hello
        </MyComponent>
      </>
    );
}

export default BasicComp;