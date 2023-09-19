// // Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting'
function App() {
    const rootElement = document.getElementById("root");
    const greeting = rootElement.getAttribute("greeting");

    return (
        <Greeting text={greeting} />
    );
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});