import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;

  picture {
    display: block;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  main {
    flex: 1 auto;
  }
`;

const App: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default App;
