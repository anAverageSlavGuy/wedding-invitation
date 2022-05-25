import React from 'react';
import ConfirmInvitation from './ConfirmInvitation';
import Registry from './Registry';
import Faq from './Faq';
import Nav from './Nav';
import pianta1 from '../images/pianta1.svg';
import pianta2 from '../images/pianta2.svg';
import pianta3 from '../images/pianta3.svg';
import photo1 from '../images/photo1.jpg';


function Home() {
    return (
        <>
            <Nav links="false" />
            <div className="Home">
                <section className="row first-section margin">
                    <div className="col-12 col-md-6" style={{ "position": "relative" }}>
                        <img src={pianta3} className="d-none d-md-block pianta3" alt="pianta3" />
                        <div className="our-photo align-right" style={{ "background": "#E2E2E5" }}>
                            <img src={photo1} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 title">
                        <span className="align-left m-mt-20">
                            YEV&nbsp;
                            <br className="d-none d-md-block" />
                            &&nbsp;
                            <br className="d-none d-md-block" />
                            NESS
                            <p className="align-left">ARE GETTING MARRIED</p>
                        </span>
                    </div>
                </section>

                <section id="when-where" className="row margin mb-120 m-mb-80">
                    <div className="d-none d-md-flex col-md-6 title" style={{ "paddingTop": "7.5rem" }}>
                        <span className="align-right">
                            SAVE
                            <br />
                            THE
                            <br />
                            DATE
                        </span>
                    </div>
                    <div className="col-12 col-md-6 title justify-content-center m-pt-20" style={{ "paddingTop": "7.5rem" }}>
                        <div className="align-left m-align-center text-24 m-text-20 italic-text mb-80 m-mb-40">
                            Saremmo felici di creare dei ricordi con le persone veramente&nbsp;
                            <br className="d-none d-md-block" />
                            importanti per noi durante il nostro giorno speciale.&nbsp;
                            <br className="d-none d-md-block" />
                            La cerimonia e il ricevimento avverranno nello stesso luogo.
                        </div>
                        <div className="align-left m-align-center mb-40">
                            <div className="semibold-text text-40 m-text-30 underline m-mb-10">QUANDO</div>
                            <div className="text-24 m-text-20">3 Aprile 2022 | 18:00 - 1:00</div>
                        </div>
                        <div className="align-left m-align-center">
                            <div className="semibold-text text-40 m-text-30 underline m-mb-10">DOVE</div>
                            <div className="text-24 m-text-20">
                                “La porta del principe”
                                <br />
                                Via Portuense, 1585, Roma
                            </div>
                        </div>
                    </div>
                </section>

                <ConfirmInvitation />

                <Registry />

                <Faq />
                
            </div >
            <Nav />
        </>
    );
}

export default Home;