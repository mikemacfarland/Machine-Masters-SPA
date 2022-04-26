import React from 'react'
import Header from '../components/Header'
import LandingScreen from './LandingScreen'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

//SCREENS
import MachineryScreen from './MachineryScreen'
import ToolingScreen from './ToolingScreen'
import ResourcesScreen from './ResourcesScreen'
import LocationsScreen from './LocationsScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const ScreenHolder = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<LandingScreen/>}/>
                <Route path='/Machinery' element={<MachineryScreen/>}/>
                <Route path='/Tooling' element={<ToolingScreen/>}/>
                <Route path='/Resources' element={<ResourcesScreen/>}/>
                <Route path='/Locations' element={<LocationsScreen/>}/>
                <Route path='/Login' element={<LoginScreen/>}/>
                <Route path='/Signup' element={<SignupScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenHolder