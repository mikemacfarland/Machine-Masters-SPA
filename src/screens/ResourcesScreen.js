import { useState } from "react"

import StyledContainer from "../components/styled/StyledContainer"
import StyledSection from "../components/styled/StyledSection"
import FlexColumn from "../components/styled/FlexColumn"
import FlexRow from "../components/styled/FlexRow"
import images from "../assets/images"

const matlRemovalMethods = ['Milling','Drilling','Turning']
const machineVariables = ['RPM','Surface Speed','Feedrate']

const ResourcesScreen = ()=>{
    const [method,setMethod] = useState('Milling')
    
    const methodChange = (e)=>{
        setMethod(e.target.id)
    }

    return(
        <StyledContainer bg={images.bg2}>
            <StyledSection>
                <h1>Machining Calculator</h1>
                <FlexRow width='100%'>
                    <FlexColumn width='45%' margin='0 2.5% 0 0' backgroundColor='blue'>
                        <h2>Material Removal Method</h2>

                        {matlRemovalMethods.map(method=>{
                            return(
                                <FlexRow key={method}> 
                                    <input type="radio" onChange={methodChange} name='optype' defaultChecked={method === 'Milling'? true : false} id={method}/>
                                    <label htmlFor={method}>{method}</label>
                                </FlexRow>
                            )   
                        }
                        )
                        }

                    </FlexColumn>
                    <FlexColumn width='45%'backgroundColor='red'>
                        <h2>Variables</h2>
                        {machineVariables.map(item=>{
                            return(
                                <FlexRow key={item}>
                                    <label htmlFor={item}>{item}</label>
                                    <input id={item} type='text'/>
                                </FlexRow>
                            )
                        }
                        )
                        }
                    </FlexColumn>
                </FlexRow>
            </StyledSection>
        </StyledContainer>
    )
}

export default ResourcesScreen