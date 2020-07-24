import styled from 'styled-components';
import { Title } from "../../atoms"
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    text-align: right;
    ${Title.h1}, ${Title.h2}{
        max-width: initial;
    }
`;