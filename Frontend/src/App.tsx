import { lazy, Suspense } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Loader from './MyComponents/Loader'
import Navbar from './MyComponents/Navbar'
import PrivateRoute from './MyComponents/PrivateRoute'
import KYC from './Pages/kyc'
import { useSelector } from 'react-redux'


function App() {

    const userInfo = useSelector((state) => state.user)
   const Home = lazy(() => import("./Pages/Home"))
   const SignUp = lazy(() => import ("./Pages/SignUp"))
   const SignIn = lazy(() => import ("./Pages/SignIn"))
   const ForgotPassword = lazy(() => import ("./Pages/ForgotPassword"))
   const SetNewPassword = lazy(() => import ("./Pages/SetNewPassword"))
   const VerifyEmail = lazy(() => import ("./Pages/VerifyEmail"))
   const MyWallet = lazy(() => import("./Pages/MyWallet"))
   


  return (
     
    <>

     <Router>
      <Navbar isAuth = {userInfo.isAuth}/>
      <Suspense fallback = {<Loader />}>
      <Routes>
    
        <Route path='/signup' element = {<SignUp />}/>
        <Route path='/signin' element = {<SignIn />}/>
        <Route path='/verifyEmail' element = {<VerifyEmail />}/>
        <Route path='/forgotPassword' element = {<ForgotPassword />} />
        <Route path='/setNewPassword' element = {<SetNewPassword />} />


        {/* Private Route are Here */}

          <Route  element = {<PrivateRoute></PrivateRoute>}>
                 <Route path='/' element = {<Home />} />
                 <Route path='/kyc' element = {<KYC />} />
                 <Route path='/my-wallet' element = {<MyWallet />} />
          </Route>
      
       </Routes>
      </Suspense>
     </Router>
    </>

  )
}

export default App
