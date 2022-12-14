import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import { store } from './App/store'
import { Provider } from 'react-redux'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'


if (process.env.NODE_ENV === 'production') disableReactDevTools()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>

        <App />

      </BrowserRouter >

    </Provider>
  </React.StrictMode>
)
