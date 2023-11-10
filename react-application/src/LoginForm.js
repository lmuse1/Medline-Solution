import React  from 'react';
import { Link } from 'react-router-dom';
import WelcomeNote from './WelcomeNote';
import DateTime from './DateTime';


function LoginForm() {
  return (
    <div className="loginContainer">
    <WelcomeNote/>
      <div className="login-container">
        <h2>Login to Medline</h2>
        <form action="your_server_side_script.php" method="post">
          <label htmlFor="username">User ID:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          
          <Link to='/home'> 
          <button Link to='/home' type="submit" >Login</button>
          </Link>
          
          <div className="forgot-password">
            <a href="forgot_password.php">Forgot Password</a>
        </div>
        </form>
      </div>
    <DateTime/>
    </div>
    
  );
}

export default LoginForm;
