import FlexRow from "./styled/FlexRow"
import FlexColumn from "./styled/FlexColumn"

const ToolingContentItems = ({content})=>{
    const imgLogoStyle ={
        width: 120,
        height: 120,
        
    }

    const imgSmallStyle ={
        width: 150,
        height: 150,
        marginLeft: '1rem'
    }

    return(
        content.map(data =>{
            return (
            <FlexColumn width='33%' margin='0 0 10px 0' align='center' key={data.id}>
                <h1>{data.title.toUpperCase()}</h1>
                <img style={imgLogoStyle} src={data.logo} alt="" />
            </FlexColumn>)
        })
    )
}

export default ToolingContentItems