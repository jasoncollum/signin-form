import React from 'react';
import './signup-form.styles.css';

const SignUpForm = ({ handleClick }) => {
    return (
        <div>
            <form className='signup-form' action="">
                <h1>Welcome</h1>
                <input type='email' name='' placeholder='Email' />
                <input type='password' name='' placeholder='Password' />
                <input type='submit' name='' value='Sign Up' />
                <p onClick={handleClick}>Already have an account? Sign In</p>
            </form>
        </div>
    )
}

export default SignUpForm;