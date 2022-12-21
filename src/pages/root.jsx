import { Outlet } from 'react-router-dom'

import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer'

export default function Root () {
    return (
        <React.Fragment>
            <Header />
                <Outlet />
            <Footer />
        </React.Fragment>
    )
}
