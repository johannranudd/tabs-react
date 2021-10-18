import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1200px;
  .container {
    display: grid;
    .duty {
      display: grid;
      grid-template-columns: 10% 90%;
      place-items: center;
    }
  }
  @media (min-width: 975px) {
    .container {
      grid-template-columns: 20% 80%;
    }
  }
`;
