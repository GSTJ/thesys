import styled from 'styled-components';
import { SECONDARY_BG } from "global_variables"

export const Container = styled.div`
    border: 1px solid #dfe1e5;
    display: flex;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 15px 20px;
    justify-content: center;
    width: 100%;
    > img {
        cursor: pointer;
        flex-shrink:0;
    }
`;
export const Input = styled.div`
    margin-right: 10px;
    border: 0;
    text-transform: lowercase;
    font-size: 20px;
    text-align: center;
    width:100%;
`
