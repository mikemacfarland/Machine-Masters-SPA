import React from "react"
import StyledUl from "./styled/StyledUl"
import StyledLi from "./styled/StyledLi"
import {Link} from 'react-router-dom'


const NavUl = ()=>{
    const linkStyle={
        textDecoration: 'none',
        color: 'inherit'
    }

    return(
        <StyledUl>
            <StyledLi><Link style={linkStyle} to='/Machinery'> Machinery</Link></StyledLi>
            <StyledLi><Link style={linkStyle} to='/Tooling'> Tooling</Link></StyledLi>
            <StyledLi><Link style={linkStyle} to='/Resources'> Resources</Link></StyledLi>
            <StyledLi><Link style={linkStyle} to='/Locations'> Locations</Link></StyledLi>
        </StyledUl>
    )
}

export default NavUl