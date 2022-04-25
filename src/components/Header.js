// RESOURCES
import images from '../assets/images'
import React from 'react'
import colors from "../assets/colors"

// COMPONENTS
import UserUl from './UserUl'
import NavUl from './NavUl'

const Header = ()=>{
    const headerStyle ={
        backgroundColor: colors.brownGrey,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const imgStyle={
        width: 200,
        margin: 'auto 0 auto 20px',
    }
    return(
        <header style={headerStyle}>
            <img style={imgStyle} src={images.cogLogo} alt=""/>
            <NavUl/>
            <UserUl/>
        </header>
    )
}

export default Header