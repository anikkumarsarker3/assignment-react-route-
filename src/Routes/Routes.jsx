import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Layouts/Roots';
import Home from '../Pages/Home';
import Error from '../Components/Error/Error';
import LoadingPage from '../Pages/LoadingPage';
import CardDetails from '../Pages/CardDetails';
import Apps from '../Pages/Apps';



export const router = createBrowserRouter([
    {
        path: "",
        Component: Roots,
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '',
                loader: () => fetch('/software.json'),
                // errorElement: <Error></Error>,
                Component: Home
            },
            {
                path: '/apps',
                loader: () => fetch('/software.json'),
                // errorElement: <Error></Error>,
                Component: Apps
            },
            {
                path: '/card-details/:id',
                Component: CardDetails,
            }
        ]
    },

]);