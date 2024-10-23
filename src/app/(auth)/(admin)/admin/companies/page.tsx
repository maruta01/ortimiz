'use client';

import { Input } from "postcss";
import Image from 'next/image';
import styles from './styles.module.css';
import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link'

export default function Page() {
    const [loading, setLoading] = useState(false)


    return (
        <>
            <div className="ort-content ort-content-dashboard">
                <div className="container">
                    <div className="ort-content-body">
                        <div className="ort-dashboard-one-title">
                            <div>
                                <h2 className="ort-dashboard-title">Admin Console</h2>
                                <h2 className="ort-dashboard-text">คอนโซลผู้ดูแลระบบ</h2>
                            </div>
                            <div className="ort-content-header-right">
                                <Link href={'/admin/companies/create'} className="btn btn-ort-primary"><i className="bi bi-building-fill-add" /> เพิ่มบริษัท</Link>
                            </div>
                        </div>

                        <div className="ort-dashboard-nav">
                            <nav className="nav">
                                <a className="nav-link active" href="companies.html">รายการบริษัท (listed Companies)</a>
                                <a className="nav-link" href="authority.html">รายการผู้ดูแลระบบ (Administrator)</a>
                            </nav>
                            <nav className="nav">
                            </nav>
                        </div>

                        <div className="ort-content-label mg-b-5">Listed Company</div>
                        <p className="mg-b-20">รายการบริษัทที่ลงทะเบียนใช้งานระบบ</p>


                    </div>
                </div>
            </div>
        </>
    )


}