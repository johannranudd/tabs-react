import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1100px;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  .container {
    display: grid;
    /* button container */
    .btn-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      .btn {
        color: var(--clr-2);
        background: transparent;
        border: 2px solid transparent;
        border-bottom: 2px solid transparent;
        font-size: 1.3rem;
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
    /* info container */
    .info-container {
      width: 90%;
      margin: auto;
      .info-title {
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--clr-2);
        margin-bottom: 1rem;
      }
      .company-subtitle {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--clr-3);
        background: var(--clr-4);
        letter-spacing: 0.08rem;
        padding: 0.3rem 0.5rem;
        border-radius: 5px;
        text-align: center;
      }
      .dates {
        margin: 1rem 0;
        font-size: 0.9rem;
        color: var(--clr-3);
      }
      .duties {
        .duty {
          display: grid;
          grid-template-columns: 10% 90%;
          align-items: center;
          .duty-icon {
            color: var(--clr-1);
          }
          p {
            margin: 0.5rem 0;
            font-size: 0.87rem;
            letter-spacing: 0.01rem;
            color: var(--clr-6);
          }
        }
      }
    }
  }
  .more-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    .more-info-btn {
      padding: 0.45rem 3rem;
      color: var(--clr-7);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      background: var(--clr-1);
      border: none;
      border-radius: 5px;
      text-transform: uppercase;
      transition: 0.3s linear;
      &:hover {
        color: var(--clr-8);
        background: var(--clr-9);
      }
    }
  }
  /* @media (min-width: 790px) {
    
  } */
  @media (min-width: 975px) {
    .container {
      margin-top: 4rem;
      grid-template-columns: 20% 80%;
      .btn-container {
        flex-direction: column;
        justify-content: start;
        .btn {
          border: 2px solid transparent;
          margin-bottom: 1rem;
          padding: 0;
          width: 200px;
          &:hover {
            border: 2px solid transparent;
            border-left: 2px solid var(--clr-1);
          }
        }
        .active-btn {
          border-left: 2px solid var(--clr-1);
        }
      }
      .info-container {
        .info-title {
          font-size: 1.4rem;
        }
        .company-subtitle {
        }
        .dates {
          font-size: 1rem;
        }
        .duties {
          .duty {
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
