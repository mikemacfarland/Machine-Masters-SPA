import colors from "../assets/colors"
import StyledInput from "../components/styled/StyledInput"
import StyledButton from "../components/styled/StyledButton"
import images from "../assets/images"

const NewsLetterScreen = ()=>{
    const containerStyle={
        background: `url(${images.iscartoolbg}) center no-repeat`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100vw',
        height: 700,
        borderBottom: `7px solid ${colors.doosanYellow}`,
    }
    const formStyle={
        height: 'fit-content',
        width: 650,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '.6rem',
        boxShadow: '0 0px 8px rgba(0, 0, 0, .7)',
        padding: '4rem 0'
    }
    const h2Style={
        margin:'0 0 .5rem 0'
    }
    const smallStyle={
        marginBottom: '2rem'
    }

    return(
        <div style={containerStyle}>
            <form style={formStyle} action="">
                <h1 style={h2Style}>Sign up for our Newsletter</h1>
                <small style={smallStyle}>Recieve info and promotions for tooling and machinery from our vendors</small>
                <label htmlFor="">Email</label>
                <StyledInput id='useremail' type="text"></StyledInput>
                <StyledButton type="submit">Sign-Up</StyledButton>
            </form>
        </div>
    )
}

export default NewsLetterScreen