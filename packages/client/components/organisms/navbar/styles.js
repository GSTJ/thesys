import styled from "styled-components";
import { PRIMARY_BG, SECONDARY_BG, THEME_COLOR } from "global_variables";

export const Navbar = styled.div`
  height: 70px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${PRIMARY_BG};

  padding: 0 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${SECONDARY_BG};
`;

export const Icons = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`;
