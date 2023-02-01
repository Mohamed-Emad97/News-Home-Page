import React from 'react';
import { logo } from '../../../Utilies/imgs';

export default function Navbar() {
    return (
        <>
            <header className='p-2'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo-pic" className='w-75 text-start'/>
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link mx-2 fs-5" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 fs-5" href="#">New</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 fs-5" href="#">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-2 fs-5" href="#">Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
        </>
)
}