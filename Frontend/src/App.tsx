import { lazy, Suspense } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Loader from './MyComponents/Loader'
import Navbar from './MyComponents/Navbar'


function App() {

   const Home = lazy(() => import("./Pages/Home"))
   const SignUp = lazy(() => import ("./Pages/SignUp"))
   const SignIn = lazy(() => import ("./Pages/SignIn"))
   const ForgotPassword = lazy(() => import ("./Pages/ForgotPassword"))
   const SetNewPassword = lazy(() => import ("./Pages/SetNewPassword"))
   const VerifyEmail = lazy(() => import ("./Pages/VerifyEmail"))
   


  return (
     
    <>
     <Router>
      <Navbar/>
      <Suspense fallback = {<Loader />}>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/signup' element = {<SignUp />}/>
        <Route path='/signin' element = {<SignIn />}/>
        <Route path='/verifyEmail' element = {<VerifyEmail />}/>
        <Route path='/forgotPassword' element = {<ForgotPassword />} />
        <Route path='/setNewPassword' element = {<SetNewPassword />} />
       </Routes>
      </Suspense>
     </Router>
    </>

  )
}

export default App
