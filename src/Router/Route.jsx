import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import Add from "../Pages/Add/Add";
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPages/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:5000/notes')
            },
            {
                path: '/add',
                element: <Add/>
            },
            {
                path: '/update/:id',
                element: <Update/>,
                loader: ({ params})=> fetch(`http://localhost:5000/notes/${params.id}`)
            },
            {
                path:'/details/:id',
                element: <Details/>,
                loader: ({ params})=> fetch(`http://localhost:5000/notes/${params.id}`)
            }
        ]
    }
])

export default Route;