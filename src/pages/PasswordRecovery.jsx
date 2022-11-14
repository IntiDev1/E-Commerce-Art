import React from "react"
import "@styles/PasswordRecovery.scss"
import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="tittle">Email has been sent!</h1>
                <p className="subtitle">Please check your email and follow the instructions to rest the password.</p>
                <div className="email-image">
                    <img src="./icons/email.svg" alt="email"/>
                </div>
                <button         className="primary-button   login-button">Login</button>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default PasswordRecovery;
