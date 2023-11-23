import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Register = React.lazy(() => import("../pages/Home"))
const Login = React.lazy(() => import("../pages/Home"))


const routes = [
    { 
      path: PathConstants.HOME, 
      element: Home 
    },
    { 
      path: PathConstants.REGISTER, 
      element: Register
    },
    { 
      path: PathConstants.LOGIN, 
      element: Login  
    },
]

export default routes