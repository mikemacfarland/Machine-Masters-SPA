import styled from "styled-components"
import colors from "../../assets/colors"

const StyledContainer = styled.div`
    background: url(${props => props.bg}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 700px;
    border-bottom: 7px solid ${colors.doosanYellow};
}
`

export default StyledContainer