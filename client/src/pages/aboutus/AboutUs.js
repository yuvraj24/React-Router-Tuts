import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../home/home.css'

const AboutUs = props => {
    const naviagte = useNavigate()

    return (
        <div className='link' onClick={() => naviagte('/contact')}>AboutUs</div>
    )
}

AboutUs.propTypes = {}

export default AboutUs