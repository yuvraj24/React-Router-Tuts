import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import './home.css'

const NavigationHeader = props => {
    return (
        <header className="app-header">
            <div className='app-name-view'>
                <img className='app-logo' src={Logo} alt='logo' />
                <span>React-Router Toturial</span>
            </div>
            <NavLink className={'link'} to={'./'}>Home</NavLink>
            <NavLink className={'link'} to={'./about'}>About Us</NavLink>
            <NavLink className={'link'} to={'./contact'}>Contact Us</NavLink>
        </header>
    )
}

NavigationHeader.propTypes = {}

export default NavigationHeader