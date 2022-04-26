// RESOURCES
import images from '../assets/images'
import React from 'react'
import colors from "../assets/colors"
import { Link } from 'react-router-dom'


// COMPONENTS
import UserUl from './UserUl'
import NavUl from './NavUl'

const Header = ()=>{
    const headerStyle ={
        backgroundColor: colors.brownGrey,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `solid 7px ${colors.doosanYellow}`
    }
    const imgStyle={
        width: 200,
        margin: 'auto 0 auto 20px',
        cursor:'pointer'
    }
    return(
        <header style={headerStyle}>
            <Link to='/'><img style={imgStyle} src={images.cogLogo} alt=""/></Link>
            <NavUl/>
            <UserUl/>
        </header>
    )
}

export default Header