import React from 'react';
import Navbar from '../src/components/navbar';
import Login from '../src/components/login';
import Signup from '../src/components/signup';


const landingPage = () => {
 return (
   <div>
     <Navbar />
     <h2>Welcome to chronicles of adventure</h2>
     <p>information about the site</p>
     <Login />
     <Signup />
   </div>
 );
};


export default landingPage;

