import { createBrowserRouter } from "react-router-dom"
// importing components
// importing pages
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);

export default router;