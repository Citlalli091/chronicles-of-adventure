import React, { useState } from 'react';


const Signup = () => {
 const [signupForm, setSignupForm] = useState({
   username: '',
   email: '',
   password: ''
 });


 const handleSignupChange = (e) => {
   setSignupForm({
     ...signupForm,
     [e.target.name]: e.target.value
   });
 };


 const handleSignupSubmit = (e) => {
   e.preventDefault();
   // Add signup form submission logic here
   console.log('Signup form submitted:', signupForm);
 };


 return (
   <div>
     <h2>Sign Up</h2>
     <form onSubmit={handleSignupSubmit}>
       <input
         type="text"
         name="username"
         placeholder="Username"
         value={signupForm.username}
         onChange={handleSignupChange}
       />
       <br />
       <input
         type="email"
         name="email"
         placeholder="Email"
         value={signupForm.email}
         onChange={handleSignupChange}
       />
       <br />
       <input
         type="password"
         name="password"
         placeholder="Password"
         value={signupForm.password}
         onChange={handleSignupChange}
       />
       <br />
       <button type="submit">Sign Up</button>
     </form>
   </div>
 );
};


export default Signup;

