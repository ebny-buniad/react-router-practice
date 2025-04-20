import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement: <p>Loading...</p>,
                loader: () => fetch('../phones.json'),
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: '/phone-details/:id',
                hydrateFallbackElement: <p>Loading...</p>,
                loader: () => fetch('../phones.json'),
                Component: PhoneDetails
            },
            {
                path: '*',
                element: <p>Error mama</p>
            }
        ]
    },
]);
