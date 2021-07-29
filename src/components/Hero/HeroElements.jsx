import styled from 'styled-components';

import lostOnline from '../../images/lost-online.svg';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7.5vw;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const Details = styled.div`
    background-color: blue;
    width: 100%;
    height: 50vh;
    padding: 4vw;
    @media screen and (max-width: 768px) {
        height: auto;
        text-align: center;
    }
`;

export const Header = styled.div`
    font-size: clamp(1em, 4vw, 4em);
`;

export const Heading = styled.div`

`;

export const ButtonsContainer = styled.div`

`;

export const LostOnline = styled.div`
    background-color: yellow;
    width: 80%;
    height: 50vh;
    background: url(${lostOnline});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 40vh;
        margin-bottom: 5vh;
    }
`;
