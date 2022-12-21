import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../pages/landingpage";
import Root from "../../pages/root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
]);

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <ErrorPage />,
//       children: [
//         { 
//            index: true, 
//            element: <LandingPage /> 
//            errorElement: <ErrorPage />,
//         },
//         {
//            path: "login",
//            element: <LoginPage />,
//            errorElement: <ErrorPage />,
//         },
//         {
//            path: "profile",
//            element: <ProfilePage />,
//            errorElement: <ErrorPage />,
//         },
//       ],
//     },
//   ]);
