import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute(Props : any) {

    const userInfo = useSelector((state) => state.user)
    console.log(userInfo.isAuth)
    console.log(userInfo)

 

  return (
    <div>
         {
             userInfo.isAuth ? <Outlet /> : <Navigate to={"/signin"} />
         }
    </div>
  )
}

export default PrivateRoute
