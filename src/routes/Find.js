import React from 'react';
import './Find.css';
import './Reset.css';

function Find() {
    return (
        <div>
            <header className="top_header_3">
                <div className="header_T">
                    <ul>
                        <li><i className="fas fa-fighter-jet"></i></li>
                        <li><i className="fas fa-wifi"></i></li>
                    </ul>
                    <span>17:33</span>
                    <ul>
                        <li><i className="far fa-moon"></i></li>
                        <li><i className="fab fa-bluetooth-b"></i></li>
                        <li><span>100%</span><i className="fas fa-battery-full"></i></li>
                    </ul>
                </div>
                <div className="header_B">
                    <span>Edit</span>
                    <span>Find</span>
                    <i></i>
                </div>
            </header>
            <main className="find">
                <section>
                    <ul>
                        <li><a href="#"><i className="fas fa-address-book"></i><span>Find</span></a></li>
                        <li><a href="#"><i className="fas fa-qrcode"></i><span>QR Code
                        </span></a></li>
                        <li><a href="#"><i className="fas fa-mobile-alt"></i><span>Shake</span></a></li>
                        <li><a href="#"><i className="far fa-envelope"></i><span>Invite via SMS</span></a></li>
                    </ul>
                </section>
                <section>
                    <header>
                        <h6>Recommended Friends</h6>
                    </header>
                    <div className="Recommended">
                        <p>You have no recommended friends.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Find;
