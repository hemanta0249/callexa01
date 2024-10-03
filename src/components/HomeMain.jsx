import React, { useState } from 'react';

const HomeMain = () => {
    // State for form switching
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    // State for Sign Up form
    const [signUpForm, setSignUpForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    // State for Sign In form
    const [signInForm, setSignInForm] = useState({
        email: '',
        password: ''
    });

    // Handle input change for Sign Up form
    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    };

    // Handle input change for Sign In form
    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInForm({ ...signInForm, [name]: value });
    };

    // Handle Sign Up form submission
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log('Sign Up form data:', signUpForm);
    };

    // Handle Sign In form submission
    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log('Sign In form data:', signInForm);
    };

    // Toggle between sign-up and sign-in
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignUpSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={signUpForm.name}
                            onChange={handleSignUpChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpForm.email}
                            onChange={handleSignUpChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signUpForm.password}
                            onChange={handleSignUpChange}
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSignInSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signInForm.email}
                            onChange={handleSignInChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signInForm.password}
                            onChange={handleSignInChange}
                        />
                        <a href="#">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={handleSignInClick} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost" onClick={handleSignUpClick} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
        </div>
    );
};

export default HomeMain;
