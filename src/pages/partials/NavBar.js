import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const NavBar = () => {

    const { route } = useRouter();

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-gradient-dark">
            <a className="navbar-brand" href="/">Advance React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <Link href="/techs">
                        <li className={`nav-item ${route === '/' ? 'active' : ''}`}>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </Link>
                    <Link href="/techs">
                        <li className={`nav-item ${route === '/techs' ? 'active' : ''}`}>
                            <a className="nav-link" href="/techs">Techs <span className="sr-only">(current)</span></a>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
