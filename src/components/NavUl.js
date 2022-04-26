import React from "react"
import StyledUl from "./styled/StyledUl"
import StyledLi from "./styled/StyledLi"
import {Link} from 'react-router-dom'


const NavUl = ()=>{
    return(
        <StyledUl>
            <StyledLi><Link to='/Machinery'> Machinery</Link></StyledLi>
            <StyledLi><Link to='/Tooling'> Tooling</Link></StyledLi>
            <StyledLi><Link to='/Resources'> Resources</Link></StyledLi>
            <StyledLi><Link to='/Locations'> Locations</Link></StyledLi>
        </StyledUl>
    )
}

export default NavUl