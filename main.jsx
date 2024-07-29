import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import TermAndCon from './Components/TermAndCon.jsx'
import store from './stores/mainStore.js'
import { Provider } from 'react-redux'
import MainNavBar from './Components/MainNavBar.jsx'
import Bag from './Components/Bag.jsx'
import SignUp from './screens/SignUp.jsx'
import Login from "./screens/Login.jsx"
import MainPizzaDisplay from './Components/MainPizzaDisplay.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/term&policy",
        element:<TermAndCon/>
      },
      {
        path:"/",
        element:<MainNavBar/>,
      children:[
        {
         path:'/',
         element:<MainPizzaDisplay/>
        },
      {
        path:"/bag",
        element:<Bag/>
      },
      {
        path:"/signUp",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
    </Provider>
    
  </React.StrictMode>,
)
