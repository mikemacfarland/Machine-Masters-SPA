import React from "react";
import StyledUl from "./styled/StyledUl";
import StyledLi from "./styled/StyledLi";
import StyledHighlightLi from "./styled/StyledHighlightLi";
import {Link} from 'react-router-dom'

const UserUl = ()=>{
    return(
        <StyledUl>
            <StyledLi><Link to='/Login'>Log-in</Link></StyledLi>
            <StyledHighlightLi><Link to='/Signup'>Sign-up</Link></StyledHighlightLi>
        </StyledUl>
    )
}

export default UserUl