import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledHighlightLi = styled.li`
    position: relative;
    margin: auto 1.1rem;
    width: 90px;
    text-align: center;
    background-color: ${colors.rustBrown};
    color: ${colors.halfWhite};
    padding: .85rem 1rem;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0,0,0, .5);
    cursor: pointer;
    z-index:0;
    &::after{
        content: '';
        height: 90%;
        width: 110%;
        border-radius: 50%;
        position: absolute;
        top: 5%;
        left: -5%;
        border: 1px solid ${colors.doosanLightBlue};
        transform: rotate(-5deg);
        z-index: -1;
    }
`

export default StyledHighlightLi