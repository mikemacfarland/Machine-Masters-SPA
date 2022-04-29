// ASSETS
import colors from "../assets/colors"
import images from "../assets/images"

// COMPONENTS
import StyledContainer from "../components/styled/StyledContainer"
import StyledForm from "../components/styled/StyledForm"
import StyledInput from "../components/styled/StyledInput"
import StyledButton from "../components/styled/StyledButton"


const NewsLetterScreen = ()=>{
    const h1Style={
        margin:'0 0 .5rem 0'
    }
    const smallStyle={
        marginBottom: '2rem'
    }
    return(
        <StyledContainer bg={images.iscartoolbg}>
            <StyledForm action="">
                <h1 style={h1Style}>Sign up for our Newsletter</h1>
                <small style={smallStyle}>Recieve info and promotions for tooling and machinery from our vendors</small>
                <label htmlFor="">Email</label>
                <StyledInput id='useremail' type="text"></StyledInput>
                <StyledButton type="submit">Sign-Up</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}

export default NewsLetterScreen