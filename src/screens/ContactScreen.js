// ASSETS
import colors from "../assets/colors"
import images from "../assets/images"

// COMPONENTS
import StyledContainer from "../components/styled/StyledContainer"
import StyledForm from "../components/styled/StyledForm"
import StyledInput from "../components/styled/StyledInput"
import StyledButton from "../components/styled/StyledButton"
import StyledTextArea from "../components/styled/StyledTextarea"
import FlexRow from "../components/styled/FlexRow"
import FlexColumn from "../components/styled/FlexColumn"

const ContactScreen = ()=>{
    const inputWidth = '17rem'

    const selectStyle={
        backgroundColor: colors.halfWhite,
        border: 'none',
        height: '2.5rem',
        borderRadius: '4px',
        textAlign: 'center',
        margin: '.5rem 0 .5rem 1rem',
        width: '31%',
        outline: 'none'
    }

    return(
        <StyledContainer bg={images.harveytoolbg}>
            <StyledForm>
                <FlexRow width='90%' justify='space-between'>
                    <FlexColumn>
                        {/* NAME AND EMAIL */}
                        <FlexColumn>
                            <label htmlFor="">Name</label>
                            <StyledInput width={inputWidth} type=''></StyledInput>
                        </FlexColumn>
                        <FlexColumn>
                            <label htmlFor="">Email</label>
                            <StyledInput width={inputWidth} type=''></StyledInput>
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn>
                        {/* COMPANY AND POSITION */}
                        <FlexColumn>
                            <label htmlFor="">Company</label>
                            <StyledInput width={inputWidth} type=''></StyledInput>
                        </FlexColumn>
                        <FlexColumn>
                            <label htmlFor="">Title</label>
                            <StyledInput width={inputWidth} type=''></StyledInput>
                        </FlexColumn>
                    </FlexColumn>
                </FlexRow>
                <FlexColumn width='90%'>
                    {/* INQUIRY REASON AND TEXT */}
                    <FlexRow align='center' justify='flex-start'>
                    <label htmlFor="">Inquiry Type</label>
                    <select style={selectStyle} type=''>
                        <option value="">General</option>
                        <option value="">Tooling Quote/Info</option>
                        <option value="">Machinery Quote/Info</option>
                        <option value="">Machinery Parts/Info</option>
                    </select>
                    </FlexRow>
                    <StyledTextArea type='textarea'></StyledTextArea>
                </FlexColumn>
                <StyledButton>Submit</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}

export default ContactScreen