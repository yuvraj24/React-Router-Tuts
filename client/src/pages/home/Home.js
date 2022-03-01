import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import './home.css'

const Home = props => {
    return (
        <div className="App">
            <header className="app-header">
                <div className='app-name-view'>
                    <img className='app-logo' src={Logo} alt='logo' />
                    <span>React-Router Toturial</span>
                </div>
            </header>
            <main className='app-content'>
                <section className='content'>
                    1. Navigating with Link
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={'/about'}>About Us</NavLink>
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={'/contact'}>Contact Us</NavLink>
                    <br></br>
                    2. Reading URL Params
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={'/products'}>View Products</NavLink>
                </section>
                <Outlet />
            </main>
        </div>
    )
}

Home.propTypes = {}

export default Home