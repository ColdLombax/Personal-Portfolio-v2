import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    padding: 2em;
`;

export const NavList = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: 3em;

    font-size: clamp(1em, 3vw, 1.4em);

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const NavItem = styled.nav`
    cursor: pointer;
`;
