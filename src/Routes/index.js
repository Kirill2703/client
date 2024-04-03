import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AdminMainPage from "../admin/pages/admin/admin-main-page";
import CountriesList from "../admin/pages/countries/countries-list";



const admin = {
    path: 'admin',
    element: <AdminMainPage />,
    children: [
        {
            path: 'countries',
            element: <CountriesList />,
            children: [
                {
                    path: 'create',
                    element: <h3>Countries create</h3>
                }
            ]
        }
    ]
}

const client = {}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            admin,
            client
        ]
    }
])

export default router