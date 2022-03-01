import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <section className='content'>
                <NavLink to={'/products/11'}>Product Item 11</NavLink>
                <NavLink to={'/products/123'}>Product Item 123</NavLink>
            </section>
            <Outlet />
        </>
    )
}

export default Products