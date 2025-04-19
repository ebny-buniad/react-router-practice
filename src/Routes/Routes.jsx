import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('phones.json'),
                Component: Home
            },
            { path: 'about', Component: About },
        ]
    },
]);
