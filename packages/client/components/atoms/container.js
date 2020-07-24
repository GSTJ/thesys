import styled from "styled-components";
import Information from "./information"
import Title from "./title"

export default styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;

    max-width: 1200px;
    padding: 40px;
    padding-bottom: 0;
    box-sizing:border-box;

    ${Title.h1}, ${Title.h2} {
        max-width: 550px;
    }
    @media (max-width: 767px){
        justify-content: center;
        align-items: center;
        padding: 30px;
        min-height: 400px;
        
        ${Information} {
            margin: auto;
            text-align: center;
        }
        
        img {
            display: none;
        }
    }
`;