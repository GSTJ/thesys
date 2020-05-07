import { THEME_COLOR } from "global_variables";
import styled from "styled-components";

export const h1 = styled.h1`
  font-size: calc(22px + 1.5vw);
  margin-bottom: 30px;
  > span {
    color: ${THEME_COLOR};
  }
  > p {
    color: #515151;
    font-size: calc(15px + 1vw);
    margin: 0;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    > p {
      font-size: 25px;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
    max-width: 450px;
    margin: auto;
    margin-bottom: 30px;
  }
`;

export const h2 = h1.withComponent("h2");

export default { h1, h2 };
