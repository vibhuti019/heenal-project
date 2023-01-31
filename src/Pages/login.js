import styles from'./login.module.css'
import React from 'react'
import { useState } from "react";

function Login() {

    const [login, setLoginClass] = useState(`${styles.container}`);

    function toggleClassName(){

    }
    return (
        <>

    <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
    </div>
    <section>
        <div className={login} id="container">
            <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                <form action="#">
                    <h1>Sign Up</h1>
                    <label>
                        <input type="text" placeholder="Name"/>
                    </label>
                    <label>
                        <input type="email" placeholder="Email"/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password"/>
                    </label>
                    <button  style={{marginTop: '9px'}}>Sign Up</button>
                </form>
            </div>
            <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                <form action="#">
                    <h1>Sign in</h1>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password"/>
                    </label>
                    <a href="#">Forgot your password?</a>
                    <button >Sign In</button>
                </form>
            </div>
            <div className={styles.overlayContainer}>
                <div className={styles.overlay}>
                    <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                        <h1>Log in</h1>
                        <p>Sign in here if you already have an account </p>
                        <button onClick={()=>{setLoginClass(`${styles.container}`)}} className={styles.ghost} id="signIn">Sign In</button>
                    </div>
                    <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                        <h1>Create, Account!</h1>
                        <p>Sign up if you still don't have an account ... </p>
                        <button onClick={()=>{setLoginClass(`${styles.container} ${styles.rightPanelActive}`)}} className={styles.ghost} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
  }
  
  export default Login;
  