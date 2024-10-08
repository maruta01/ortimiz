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
                            <Image src='/images/logo/logo.png' alt='logo-login' height={280} width={280} />
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
                                <button className="btn btn-ort-primary btn-block">Sign In</button>
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