import styled, { css } from "styled-components";
import { THEME_COLOR, DARKER_THEME_COLOR } from "global_variables";

export default styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 200ms;
  font-size: .8em;
  padding: 12px calc(12px + 2vw);
  font-weight: bold;

  /* Overriding */
  background-color: unset;
  border: unset;
  box-sizing: unset;
  outline: none;

  font-family: "Helvetica Neue Lt Std", "Helvetica Neue", sans-serif;
  
  ${props => props.filled && css`
    background-color: ${THEME_COLOR};
    color: white;
    :hover {
      background-color: ${DARKER_THEME_COLOR};
    }
  `}
  ${props => props.stroked && css`
    border: 3px solid ${THEME_COLOR};
    color: ${THEME_COLOR};
    :hover {
      background-color: ${THEME_COLOR};
      color: white;
    }
  `}

  border-radius: ${props => props.radius};

  @media (min-width: 1200px) {
    padding: 12px 24px;
  }
  @media (max-width: 370px) {
    padding: 10px;
  }
`;
