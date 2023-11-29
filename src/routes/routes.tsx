import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NewPost } from "../pages/NewPost";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/newPost",
        element: <NewPost />
    }
])