import styled from "styled-components";
import colors from "../../assets/colors";

const StyledButton = styled.button`

    width: ${props => (props.width ? props.width : '19.625rem')};
    height: 2.5rem;
    margin-top: 1rem;
    border: none;
    background-color: ${colors.doosanLightBlue};
    border-radius: .25rem;
    box-shadow: 0 2px 3px rgba(0,0,0,.5);
    cursor: pointer;
    transition: .2s ease all;
    &:hover{
        opacity: .9;
    }
    &:active{
        transform: scale(.98);
    }
`

export default StyledButton