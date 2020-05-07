import styled from "styled-components";
import { Button } from "components/atoms";
import { TextField, FormHelperText } from "@material-ui/core";

export const ErrorMessage = styled(FormHelperText)`
  && {
    margin: 0;
    padding: 0;
  }
`;
export const Input = styled(TextField)`
  background-color: white;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  border-top: 1px solid #dddddd;
  min-height: 500px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 40px;
  box-sizing: border-box;
  max-width: 800px;
`;

export const Alert = styled.div`
  display: flex;
  max-width: 500px;
  font-size: 18px;
  color: #545454;
  align-items: center;
  img {
    margin-right: 25px;
  }
  @media (max-width: 420px) {
    img {
      display: none;
    }
  }
`;

export const EmailContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  ${Button} {
    margin-top: 15px;
    font-size: 16px;
    white-space: nowrap;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
    ${Button} {
      flex: 1;
    }
  }
`;
