import React from "react";
import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
// Styling above Link component
const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

const stylingComp = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return(
        <Wrapper>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>
        </Wrapper>
    );
}

export default stylingComp;