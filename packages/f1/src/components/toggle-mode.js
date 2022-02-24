import React from "react";
import { connect, styled } from "frontity";
import { Icon } from "react-icons-kit";
import { iosSunny as sun } from "react-icons-kit/ionicons/iosSunny";
import { iosMoon as moon } from "react-icons-kit/ionicons/iosMoon";
 
const ToggleMode = ({ actions, state }) => {
    const { lightMode, darkMode } = actions.theme;
    const { mode } = state.theme;
    return (
        <Container>
            <ButtonsStyled isSelected={ mode === 'light' } onClick={ lightMode }><Icon size={36} icon={sun} /></ButtonsStyled>
            <ButtonsStyled isSelected={ mode === 'dark' } onClick={ darkMode }><Icon size={36} icon={moon}/></ButtonsStyled>
        </Container>
    )
}
export default connect(ToggleMode);
 
const Container = styled.div`
    display: flex;
    bottom: 10px;
    position: relative;
`;
 
const ButtonsStyled = styled.button`
    width: 50px;
    height: 50px;
    text-align: center;
    border:0px;
    color:inherit;
    background: transparent;
    /* background-color: ${({ isSelected }) => (isSelected ? '#a5a5a5': 'transparent')}; */
    color: ${({ isSelected }) => (isSelected ? '#ecc533': '#333333')};
`;