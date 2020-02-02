import React from 'react';
import './signin-form.styles.css';

const SignInForm = ({ handleClick }) => {
    return (
        <div>
            <form className='signin-form' action="">
                <h1>Welcome</h1>
                <input type='email' name='' placeholder='Email' />
                <input type='password' name='' placeholder='Password' />
                <input type='submit' name='' value='Sign In' />
                <p onClick={handleClick}>Don't have an account?  Sign Up</p>
            </form>
        </div>
    )
}

export default SignInForm;