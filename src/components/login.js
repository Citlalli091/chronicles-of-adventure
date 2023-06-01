import React, { useState } from 'react';


const Login = () => {
 const [loginForm, setLoginForm] = useState({
   email: '',
   password: ''
 });


 const handleLoginChange = (e) => {
   setLoginForm({
     ...loginForm,
     [e.target.name]: e.target.value
   });
 };


 const handleLoginSubmit = (e) => {
   e.preventDefault();
   // Add login form submission logic here
   console.log('Login form submitted:', loginForm);
 };


 return (
   <div>
     <h2>Login</h2>
     <form onSubmit={handleLoginSubmit}>
       <input
         type="email"
         name="email"
         placeholder="Email"
         value={loginForm.email}
         onChange={handleLoginChange}
       />
       <br />
       <input
         type="password"
         name="password"
         placeholder="Password"
         value={loginForm.password}
         onChange={handleLoginChange}
       />
       <br />
       <button type="submit">Log In</button>
     </form>
   </div>
 );
};


export default Login;


