import React from 'react'
import ReactDOM from 'react-dom'

// Import Global style sheet from index.css
import './index.css'
// Import App from App.js
import App from './App'

// Insert main app component and use xml syntax instead of <h1>, to display Hello from the app component (using text inside <h1> tag from app.js)
// You can use React.StrictMode to wrap around app component
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
, document.getElementById('root'))