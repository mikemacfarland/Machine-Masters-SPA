// COMPONENTS
import StyledContainer from '../components/styled/StyledContainer'
import StyledSection from '../components/styled/StyledSection'
import ToolingContentItems from '../components/ToolingContentItems'
import FlexRow from '../components/styled/FlexRow'
import FlexColumn from '../components/styled/FlexColumn'

// ASSETS
import images from '../assets/images'

const toolingData = [
    {
        id: 1,
        title: 'ISCAR',
        logo: images.iscarLogo,
    },
    {
        id: 2,
        title: 'Harvey tool',
        logo: images.harveyLogo,
    },
    {
        id: 3,
        title: 'Helical',
        logo: images.helicalLogo,
    },
    {
        id: 4,
        title: 'micro 100',
        logo: images.micro100Logo,
    },
    {
        id: 5,
        title: 'cogsdill',
        logo: images.cogsdillLogo,
    },
    {
        id: 6,
        title: 'garr tool',
        logo: images.garrLogo,
    }
]

const ToolingScreen = ()=>{
    return(
        <StyledContainer bg={images.bg4}>
            <StyledSection>
                <FlexRow wrap='wrap' margin='0' justify='space-between'>
                        <ToolingContentItems content={toolingData}/>
                </FlexRow>

            </StyledSection>
        </StyledContainer>
    )
}

export default ToolingScreen