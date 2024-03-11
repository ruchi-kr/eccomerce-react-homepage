import React from 'react'                                      //importing react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';            //importing fontawesome
import { faBagShopping, faHeart, faUser,faMagnifyingGlass,faMobileScreenButton,faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './Header.css'                                                     //importing css
import { Link } from 'react-router-dom'                                   //importing Link from react-router-dom
const Header = () => {                                                    //Header functional component
    return (
        <>
            {/* upper navbar */}

            <div className="container-fluid">
                <div className="row bg-dark p-1 d-flex">
                    <div className="col-auto offset-md-8 offset-lg-9 offset-xxl-10 ">
                        <FontAwesomeIcon icon={faMobileScreenButton} className=" iconcolor" /><a className="text-decoration-none" href="https://www.nykaafashion.com/app-promo"><span className="text-secondary"> App download</span></a>
                    </div>
                    <div className="col-auto">
                        <FontAwesomeIcon icon={faCircleQuestion} className="iconcolor" /><Link className="text-decoration-none" to="#"><span className="text-secondary"> help</span></Link>
                    </div>
                </div>
            </div>
            {/* 1st navbar with search section and buttons  */}
            <div>
                <nav className="navbar navbar-expand-lg bglightcolor">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bolder fs-2 ms-3 fontcolor" style={{ fontFamily: 'cursive', textShadow: '5px 5px #d2b0e3' }} to="#">STYLE UP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#777', color: '#77777' }}>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* search form  */}
                            <form className="d-flex m-auto col-lg-6" role="search">
                                <div className="box d-flex border border-0 bg-white py-2 px-1 col-12 my-2 col-12 d-flex align-items-center">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="  mx-2 iconcolor" />
                                    <input className=" border border-0 fs-5 col-11 col-md-11 col-lg-11 search" type="search" placeholder="Search for products, style, brands" aria-label="Search" />
                                </div>
                            </form>
                            {/* account button  */}
                            <Link className="btn btn-outline-dark mx-2 py-2 px-1 my-2 border border-0 col-3 col-lg-1 col-sm-2 d-flex justify-content-center align-items-center gap-2" to="#" role="button" type="submit"><FontAwesomeIcon icon={faUser} />
                                Account </Link>
                            {/* wishlist button  */}
                            <Link className="btn btn-outline-dark mx-2 py-2 px-1 my-2 border border-0 col-3 col-lg-1 col-sm-2 d-flex justify-content-center align-items-center gap-2" to="#" role="button" type="submit"><FontAwesomeIcon icon={faHeart} />
                                Wishlist</Link>
                            {/* cart btton */}
                            <Link className="btn btn-outline-dark mx-2 py-2 px-1 my-2 border border-0 col-3 col-lg-1 col-sm-2 d-flex justify-content-center align-items-center gap-2" to="#" role="button" type="submit"><FontAwesomeIcon icon={faBagShopping} /> Cart</Link>
                           
                        </div>
                    </div>
                </nav>
                {/* 2nd nav tab  */}
                <ul className="nav justify-content-center">
                    <li className="nav-item ">
                        <Link className="nav-link active fontcolor" aria-current="page" to="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fontcolor" to="#">All Products</Link>
                    </li>
                    {/* women dropdown menu */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle fontcolor" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Women
                        </Link>
                        <ul className="dropdown-menu ">
                            <li><Link className="dropdown-item fontcolor" to="#">All Products</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Indian Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Western Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sports Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sleep &amp; Lounge</Link></li>
                        </ul>
                    </li>
                    {/* men dropdown menu */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle fontcolor" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Men
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item fontcolor" to="#">All Products</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Indian Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Western Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sports Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sleep &amp; Lounge</Link></li>
                        </ul>
                    </li>
                    {/* kids dropdown menu */}
                    <li className="nav-item dropdown">                         
                        <Link className="nav-link dropdown-toggle fontcolor" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Kids
                        </Link>
                        <ul className="dropdown-menu ">
                            <li><Link className="dropdown-item fontcolor" to="#">All Products</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Indian Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Western Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sports Wear</Link></li>
                            <li><Link className="dropdown-item fontcolor" to="#">Sleep &amp; Lounge</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fontcolor" to="#">Decor</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link fontcolor" to="#">Contact</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Header                                         //exporting Header