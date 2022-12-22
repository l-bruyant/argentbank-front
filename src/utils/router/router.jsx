import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../../pages/landingpage'
import LoginPage from '../../pages/loginpage'
import ProfilePage from '../../pages/profilepage'
import ErrorPage from '../../pages/errorPage'
import Root from '../../pages/root'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            }
        ]
    },
])
