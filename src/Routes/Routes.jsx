import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Roots from '../Layouts/Roots';
import Home from '../Pages/Home';
import Error from '../Components/Error/Error';
import LoadingPage from '../Pages/LoadingPage';
import CardDetails from '../Pages/CardDetails';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: () => fetch('/software.json'),
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch('/software.json'),
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation
            },
            {
                path: 'card-details/:id',
                Component: CardDetails,
            }
        ]
    },

]);