import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    padding: 2em;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 3em;

    list-style: none;

    font-size: clamp(1em, 3vw, 1.4em);

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const NavItem = styled.li`
    cursor: pointer;

    &::after {
        content: '';
        display: ${({ isActive }) => (isActive ? 'block' : 'none')};
        background-color: #7FFF7C;
        width: 100%;
        height: 2px;
    }
`;
