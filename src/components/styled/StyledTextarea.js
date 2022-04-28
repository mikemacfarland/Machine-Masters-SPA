import styled from "styled-components";
import colors from "../../assets/colors";

const StyledTextArea = styled.textarea`
    width: ${props => (props.width ? `calc(${props.width} - 1.25rem)` : 'calc(100% - 1.25rem)')};
    height: 10rem;
    border: none;
    border-radius: .25rem;
    font-size: 1.12rem;
    padding: .625rem;
    font-family: inherit;
    font-weight: 400;
    background-color: ${colors.halfWhite};
    margin: .5rem auto;
    border: none;
    resize: none;
    overflowY: scroll;
`

export default StyledTextArea