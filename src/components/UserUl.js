import React from "react";
import StyledUl from "./styled/StyledUl";
import StyledLi from "./styled/StyledLi";
import StyledHighlightLi from "./styled/StyledHighlightLi";

const UserUl = ()=>{
    return(
        <StyledUl>
            <StyledLi>Log-In</StyledLi>
            <StyledHighlightLi>Sign-Up</StyledHighlightLi>
        </StyledUl>
    )
}

export default UserUl