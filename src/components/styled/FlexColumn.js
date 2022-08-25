import styled from "styled-components"

const FlexColumn = styled.div`
    display: flex;
    width: ${props => (props.width ? props.width : '')};
    height: ${props => (props.height ? props.height : '')};
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
    align-items: ${props => props.align};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    margin: ${props => (props.margin ? props.margin : '')};
    padding: ${props => (props.padding ? props.padding : '')};
`

export default FlexColumn

// using ternary operator (?): proips.justify ? 
// is props.justify true? if yes then value is props.justify
// if props.justify is false or wasnt passed then value is center