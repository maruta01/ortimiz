"use client"

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {/* Main header with navbar */}
      <div className="ort-header">
        <div className="container-md">
          <div className="ort-header-left">
            <a href="index.html" className="ort-logo">
              <span />
              <Image src="/images/logo/logo.svg" alt="logo-login" height={70} width={70} />
            </a>

            {/* Button to toggle offcanvas menu */}
            <button
              className="ort-header-menu-icon d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={toggleOffcanvas}
            >
              <span />
            </button>
          </div>

          {/* Navbar Menu */}
          <div className="ort-header-menu">
            <ul className="nav">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Dashboard
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Organization
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">ผังองค์กร (Organization)</a></li>
                  <li><a className="dropdown-item" href="#">โครงสร้างกะทำงาน (Shift Structure)</a></li>
                  <li><a className="dropdown-item" href="#">พนักงาน (Employee)</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Process Operation
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">โรงงาน (Plant)</a></li>
                  <li><a className="dropdown-item" href="#">กลุ่มงาน (Workgroup)</a></li>
                  <li><a className="dropdown-item" href="#">สถานี (Station)</a></li>
                  <li><a className="dropdown-item" href="#">เครื่องจักร (Machine)</a></li>
                  <li><a className="dropdown-item" href="#">กำหนดพิกัด (Location Configuration)</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Part & Tool
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">ทูล (Tools)</a></li>
                  <li><a className="dropdown-item" href="#">อุปกรณ์เครื่องจักร (Machine Part)</a></li>
                  <li><a className="dropdown-item" href="#">ชิ้นส่วน (Component Part)</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Format Configurations
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">แบบฟอร์มเพื่อตัวชี้วัด</a></li>
                  <li><a className="dropdown-item" href="#">แบบฟอร์มเพื่อควบคุมกระบวนการ</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">แบบฟอร์มการควบคุมหลัก</a></li>
                  <li><a className="dropdown-item" href="#">...</a></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Right side profile menu */}
          <div className="ort-header-right" >


            <div className="dropdown ort-profile-menu" >
              <a href="#" className="ort-img-user dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/images/faces/face1.jpg" alt="" />
              </a>





              <ul className="dropdown-menu">
                <div className="ort-dropdown-header d-sm-none">
                  <a href="#" className="ort-header-arrow">
                    <i className="icon ion-md-arrow-back" />
                  </a>
                </div>
                <div className="ort-header-profile">
                  <div className="ort-img-user">
                    <img src="/images/faces/face1.jpg" alt="" />
                  </div>
                  <h6>Aziana Pechon</h6>
                  <span>Premium Member</span>
                </div>
                <Link href={'/admin/companies'} className="dropdown-item">
                  <i className="bi bi-arrows-fullscreen"></i>
                  <h4>Admin Console</h4>
                </Link>
                <a href="#" className="dropdown-item">
                  <i className="typcn typcn-user-outline" /> My Profile
                </a>
                <a href="signin.html" className="dropdown-item">
                  <i className="typcn typcn-power-outline" /> Sign Out
                </a>
              </ul>



            </div>
          </div>






        </div>
      </div>

      {/* Offcanvas for mobile navbar */}
      <div
        className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`}
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        role="dialog"
        aria-hidden={!isOffcanvasOpen}
      >
        <div className="offcanvas-header ">
          <Image src="/images/logo/Brand-Name_0.svg" alt="logo-login" height={200} width={200} />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleOffcanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
