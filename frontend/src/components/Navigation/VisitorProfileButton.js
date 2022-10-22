import React,{useEffect, useState } from "react";



const VisitorProfileButton = ({setShowLogin, setShowSignup}) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const isDropDown = () => {
        if(showDropDown) return
        setShowDropDown(true)
    }

    useEffect(()=> {
        if(!showDropDown) return
        const colseDropDown  = () => setShowDropDown(false)
        document.addEventListener("click", colseDropDown)
        return ()=>document.removeEventListener("click", colseDropDown)
    },[showDropDown])



    return(
        <>
        <div className="wrapper">
          <button onClick={isDropDown} className="pfbutton">
              <i id='bars' className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-user"></i>
          </button>
          {
            showDropDown && (

            <div className="logindropdown">
              <div className="login-select">
                <div className="login-button"
                onClick={() => setShowLogin(true)}>
                  Log In
                </div>
              </div>
              <div className="login-select">
                <div className="signup-button"
                onClick={() => setShowSignup(true)}>
                  Sign Up
                </div>

              </div>

              <div className="login-select">
                {/* <DemoUser /> */}
              </div>
            </div>

          )}
        </div>
      </>
    )
}

export default VisitorProfileButton;
