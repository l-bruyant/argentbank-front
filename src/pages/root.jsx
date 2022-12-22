import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header.jsx'
import Footer from '../components/footer'

/**
*
* Outlet is used to render child routes inside the component, see router for more context
*
* @function Root
*
*/

export default function Root () {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
