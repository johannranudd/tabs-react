import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1200px;
  .container {
    .btn-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      .btn {
        color: var(--clr-2);
        background: transparent;
        border: none;
        border-bottom: 2px solid transparent;
        font-size: 1.4rem;
        margin: 0 0.6rem;
        transition: 0.3s linear;
        cursor: pointer;
        padding: 0;
        &:hover {
          color: var(--clr-1);
          border-bottom: 2px solid var(--clr-1);
        }
      }
      .active-btn {
        color: var(--clr-1);
        border-bottom: 2px solid var(--clr-1);
      }
    }
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
