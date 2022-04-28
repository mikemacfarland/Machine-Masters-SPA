import React from "react";
import StyledUl from "./styled/StyledUl";
import StyledLi from "./styled/StyledLi";
import StyledHighlightLi from "./styled/StyledHighlightLi";
import {Link} from 'react-router-dom'

const UserUl = ()=>{
    const linkStyle={
        textDecoration: 'none',
        color: 'inherit',
    }

    return(
        <StyledUl>
            <StyledHighlightLi><Link style={linkStyle} to='/Contact'>Contact</Link></StyledHighlightLi>
            <StyledHighlightLi><Link style={linkStyle} to='/Newsletter'>Newsletter</Link></StyledHighlightLi>
        </StyledUl>
    )
}

export default UserUl