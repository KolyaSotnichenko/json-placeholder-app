import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import HomeScreen from './components/screens/HomeScreen';
import ErrorScreen from './components/screens/ErrorScreen';
import UserDetails from './components/screens/UserDetails';
import PostScreen from './components/screens/PostScreen';
import AlbumScreen from './components/screens/AlbumScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
    loader: async ({params}) =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
    errorElement: <ErrorScreen />
  },
  {
    path: "/user/:id/post/:id",
    element: <PostScreen />,
    loader: async ({params}) =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?usersId=${params.id}&id=${params.id}`);
        const data = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
    errorElement: <ErrorScreen />
  },
  {
    path: "/user/:id/album/:id",
    element: <AlbumScreen />,
    loader: async ({params}) =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?usersId=${params.id}&id=${params.id}`);
        const data = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
    errorElement: <ErrorScreen />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
