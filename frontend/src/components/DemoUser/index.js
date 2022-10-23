import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/session"


const DemoUser = () => {
    const dispatch = useDispatch()

    const demoUserLogin = () => {
        return dispatch(login({
            credential: 'demo@user.io',
            password:   'password'
        }))
    }


    return (
    <>
      <div id="demo-user" onClick={demoUserLogin}>
        Login as Demo User
      </div>
    </>
    )
}


export default DemoUser
