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
                    <h1>Admin console</h1>
                </div>
            </div>
        </>
    )


}