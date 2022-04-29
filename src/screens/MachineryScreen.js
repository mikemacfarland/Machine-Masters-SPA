// COMPONENTS
import StyledContainer from '../components/styled/StyledContainer'
import StyledSection from '../components/styled/StyledSection'
import ContentItems from '../components/ContentItems'
import FlexRow from '../components/styled/FlexRow'

// ASSETS
import images from '../assets/images'

const machineryData = [
    {
        id: 1,
        title: 'doosan machinery',
        logo: images.doosanLogo,
        img: images.doosanSmall,
        content: 'There is no broader range or better combination of value, performance and reliability on the planet.'
    },
    {
        id: 2,
        title: 'trak machinery',
        logo: images.trakLogo,
        img: images.trakSmall,
        content: 'TRAK Machine Tools excels in delivering technology-driven tools that fit the way our customers work.'
    },
    {
        id: 3,
        title: 'united grinding machinery',
        logo: images.unitedgrindingLogo,
        img: images.unitedgrindingSmall,
        content: 'Consistently keeping the promise of customized grinding machines that are characterised by precision, reliability and cost effectiveness.'
    },
    {
        id: 4,
        title: 'doall saws',
        logo: images.doallLogo,
        img: images.doallSmall,
        content: 'DoALL industrial metal cutting band saws combine maximum performance and versatility with guaranteed precision.'
    }
]


const MachineryScreen = ()=>{
    

    return(
        <StyledContainer bg={images.bg4}>
            <StyledSection>
                <FlexRow wrap='wrap' margin='0 2.5%' justify='space-between'>
                <ContentItems content={machineryData}/>
                </FlexRow>
            </StyledSection>
        </StyledContainer>
    )
}

export default MachineryScreen