import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 500px;
`;
export const Hero = styled.div`
    max-width: calc(400px + 10vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    padding: 30px;
    box-sizing:border-box;
    overflow:hidden;
    > h1 {
        max-width: 500px;
    }
    @media (min-width: 1200px) {
        max-width: 600px;
    }
`;
export const Separator = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`