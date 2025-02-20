import { createBrowserRouter } from "react-router-dom";
import Author from "../components/Author";
import Content from "../components/Content";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import BookMarks from "../pages/BookMarks";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>,
            loader:()=>fetch("https://dev.to/api/articles?per_page=20&top=7"),

        },
        {
          path:'/blog/:id',
          element:<Blog></Blog>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
          children:[
            {
              index:true,
              element:<Content></Content>,
              loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
            },
            {
              path:'author',
              element:<Author></Author>,
              loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
            }
          ]
        },
        {
            path:'/bookmarks',
            element:<BookMarks></BookMarks>
        }
      ]
    },
  ]);

  export default router