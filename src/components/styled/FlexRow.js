import styled from "styled-components"

// extract props.val into a reusable function instead of writing an expression every time
const FlexRow = styled.div`
    display: flex;
    width: ${props => props.width};
    flex-direction: row;
    flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
    align-items: ${props => props.align ? props.aling : 'center'};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    margin: ${props => (props.margin ? props.margin : '')};
    margin: ${props => (props.padding ? props.padding : '')};
`

export default FlexRow

// using ternary operator (?): proips.justify ? 
// is props.justify true? if yes then value is props.justify
// if props.justify is false or wasnt passed then value is center