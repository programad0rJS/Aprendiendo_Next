import Link from "next/link";
import { Fragment } from "react";


const Navigation = () => {
    console.log('Ay Error');
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">Home</a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Services">
                                    <a className="nav-link">Services</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation;