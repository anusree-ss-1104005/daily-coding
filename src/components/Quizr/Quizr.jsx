import React from 'react'
import image from '../assets/Screenshot 2025-02-18 221452.png'

const Quizr = () => {
  return (
    <div className="login-page-main">
     <div className="login-div1">
      <div className="login-head">
        <div className="login-head1">quizr</div>
        <div className="login-head2">|</div>
        <div className="login-head3">skcet and skct</div>
      </div>
     <div className="login-welcome">
        Welcome back!
      </div>
      <div className="login-form">
        <label>Email</label>
        <input type="email" name="email" id="email" required/>
        <label>Password</label>
        <input type="password" name="password" id="password" required/>
      </div>
      <div className="login-btn">
        <button type="button">Log in</button>
      </div>
      <div className="login-forget-password">
        <a href="/forgot-password">Forgot password?</a>
      </div>
     </div>
     <div className="login-div2">
      <img src={image} alt="home" />
     </div>
    </div>
  )
}

export default Quizr
