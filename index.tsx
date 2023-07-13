import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import App from './App'
// import App

// in tsconfig, "allowSyntheticDefaultImports": true, was required to import styles like this
import './client/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <App />
    </>
)