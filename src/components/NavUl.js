import React from "react"
import StyledUl from "./styled/StyledUl"
import StyledLi from "./styled/StyledLi"


const NavUl = ()=>{
    return(
        <StyledUl>
            <StyledLi>Machinery</StyledLi>
            <StyledLi>Tooling</StyledLi>
            <StyledLi>Resources</StyledLi>
            <StyledLi>Locations</StyledLi>
        </StyledUl>
    )
}

export default NavUl