import FlexRow from "./styled/FlexRow"
import FlexColumn from "./styled/FlexColumn"


const ContentItems = ({content})=>{
    const imgLogoStyle ={
        width: 120,
        height: 120,
        marginRight: '1rem'
    }

    const imgSmallStyle ={
        width: 150,
        height: 150,
        marginLeft: '1rem'
    }

    return(
        content.map(data =>{
            return (
            <FlexRow width={'45%'} margin='1.25%' key={data.id}>
                <img style={imgLogoStyle} src={data.logo} alt="" />
                <FlexColumn align='center'>
                    <h1 style={{textAlign:'center'}}>{data.title.toUpperCase()}</h1>
                    <p>{data.content}</p>
                </FlexColumn>
                <img style={imgSmallStyle} src={data.img} alt="" />
            </FlexRow>)
        })
    )
}

export default ContentItems