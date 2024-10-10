'use client';

import { Input } from "postcss";
import Image from 'next/image';
import styles from './styles.module.css';
import { FormEvent, useRef, useState } from 'react';

export default function Page() {
    const [loading, setLoading] = useState(false)


    return (
        <>
            <div className="container-fluid">


                <div className={`ort-signin-wrapper ${styles.background}`}>
                    <div className="ort-card-signin">
                        <span className={styles.form_logo}>
                            <Image src='/images/logo/logo.png' alt='logo-login' height={250} width={250} />
                        </span>
                        <div className="ort-signin-header">
                            <form action="index.html">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Enter your username" defaultValue="sunchate" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password" defaultValue="" />
                                </div>

                                <div className="row ">
                                    <div className="col">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="remember_me_checkbox" style={{marginTop:'0.1rem'}}/>
                                            <label className="form-check-label text-dark" htmlFor="remember_me_checkbox">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col text-end">
                                        <a href="#" className="text-dark">Forget paasword ? </a>
                                    </div>
                                </div>
                                <button className="btn btn-ort-primary btn-block mt-4">Sign In</button>
                            </form>
                        </div>
                        <div className="ort-signin-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}