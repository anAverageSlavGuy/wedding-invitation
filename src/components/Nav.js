import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import scritte from '../images/scritte.svg';
import cuori from '../images/cuori.svg';

function Nav() {
    return (
        <>
            <nav>
                <header className="App-header">
                    <div className="App-logo">
                        <img src={scritte} className="scritte-logo" alt="logo" />
                        <img src={cuori} className="cuori-logo" alt="logo" />
                    </div>
                    <div className="menu">
                        <div className="menu-left">
                            <HashLink smooth to="/#when-where" activeclassname="active"><div>Dove e quando</div></HashLink>
                            <HashLink smooth to="/#confirm" activeclassname="active"><div>Conferma invito</div></HashLink>
                        </div>
                        <div className="menu-right">
                            <HashLink smooth to="/#registry" activeclassname="active"><div>Lista nozze</div></HashLink>
                            <HashLink smooth to="/#info" activeclassname="active"><div>Informazioni utili</div></HashLink>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    );
}

export default Nav;