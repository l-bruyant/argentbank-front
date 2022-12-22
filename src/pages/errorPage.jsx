import React from 'react'
import { useRouteError } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

export default function ErrorPage() {
    const error = useRouteError()
    
    return (
        <React.Fragment>
            <Header />
            <main>
                <div id="error-page">
                    <h1>Error</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <Footer /> 
            </main> 
        </React.Fragment>
    )
}