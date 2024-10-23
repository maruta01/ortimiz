'use client';

import { Input } from "postcss";
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link'
import { FormEvent, useRef, useState } from 'react';

export default function Page() {
    const [loading, setLoading] = useState(false)


    return (
        <>
            <div className="ort-content ort-content-dashboard">
                <div className="container">
                    <div className="ort-content-body">
               

                            <div className="row">
                                <div className="col-md-6 offset-md-7">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb ms-auto" style={{ backgroundColor: "unset", padding: "0rem" }}>
                                            <li className="breadcrumb-item"><a href="#"><i className="bi bi-house-door"></i></a></li>
                                            <li className="breadcrumb-item"><a href="#">Admin Console</a></li>
                                            <li className="breadcrumb-item"><a href="#">Company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Create</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                
                        <div>
                            <h2 className="ort-dashboard-title">เพิ่มข้อมูลบริษัท</h2>
                            <h2 className="ort-dashboard-text">Create Company</h2>
                        </div>
                        <br></br>

                        <div className="mt-3">
                            <form className="row g-3">
                                <div className="col-md-12 ml-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexIsActive" />
                                        <label className="form-check-label" htmlFor="flexIsActive"> Active (สถานะ)</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCopanyname" className="form-label">ชื่อบริษัท (Company name)</label>
                                    <input type="text" className="form-control" id="inputCopanyname" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCompanyType" className="form-label">ประเภทบริษัท (Business type)</label>
                                    <input type="text" className="form-control" id="inputCompanyType" />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputAddress" className="form-label">ที่อยู่บริษัท (Adress)</label>
                                    <textarea rows={3} className="form-control" id="inputAddress" defaultValue={"บ้านเลขที่ , อาคาร ... "} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputTaxID" className="form-label">เลขประจำผู้เสียภาษี (Tax ID)</label>
                                    <input type="text" className="form-control" id="inputTaxID" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputContactName" className="form-label">ชื่อผู้ติดต่อ (Contact Name)</label>
                                    <input type="text" className="form-control" id="inputContactName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhoneNamber" className="form-label">เบอร์ติดต่อ (Phone number)</label>
                                    <input type="text" className="form-control" id="inputPhoneNamber" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPackageLavel" className="form-label">แพ็คเกจ (Package Level)</label>
                                    <select id="inputPackageLavel" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>Standard</option>
                                        <option>Silver</option>
                                        <option>Gold</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputQuota" className="form-label">จำนวนสิทธิ์ผู้ใช้ (Quota)</label>
                                    <input type="number" className="form-control" id="inputQuota" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputRemark" className="form-label">หมายเหตุ (Remark)</label>
                                    <textarea rows={3} className="form-control" id="inputRemark" defaultValue={""} />
                                </div>

                                <div className="row row-xs justify-content-md-center wd-xl mb-3 mt-4">
                                    <div className="col-sm-6 col-md-3"><a href="companies.html" className="btn btn-light  btn-with-icon btn-block"><i className="typcn typcn-arrow-back-outline" /> กลับ</a></div>
                                    <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><button className="btn btn-success btn-with-icon btn-block"><i className="typcn typcn-edit" /> บันทึก</button></div>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )


}