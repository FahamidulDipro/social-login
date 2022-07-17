import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {
    
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <h1 className='shadow-lg p-5'><span className='text-success fw-bold'> Congratulation! </span>You are successfully Logged In</h1>
            
           
        </div>
    );
};

export default About;