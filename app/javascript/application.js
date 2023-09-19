// // Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Greeting />,
        },
    ]);
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});