import React, { useState } from 'react';
import pianta4 from '../images/pianta4.svg';
import pianta5 from '../images/pianta5.svg';
import top from '../images/top.svg';
import bottom from '../images/bottom.svg';
import palette from '../images/palette.jpg';

function Faq(props) {

    const [open, setOpen] = useState(false);

    return (
        <section id="info" className="row margin mb-120 m-mb-40" style={{ "position": "relative" }}>
            <img src={pianta4} className="d-none d-md-block pianta4" alt="pinata4" />
            <img src={pianta5} className="d-none d-md-block pianta5" alt="pianta5" />
            <div className="col-md-12">
                <div className="outlined m-text-64" style={{ "letterSpacing": "0.35rem" }}>FAQ</div>
                <div className="text-40 m-text-30 semibold-text mt-20">
                    Domande utili che probabilmente vi starete facendo, o quasi,&nbsp;
                    <br className="d-none d-md-block" />
                    a cui adesso daremo risposta
                </div>

                <div className="row mt-40 m-mt-80">
                    <div className="col-12 col-md-6 pt-20 m-pt-40 separator m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-right m-align-left">
                            Perché un sito web e non dei semplici&nbsp;
                            <br className="d-none d-md-block" />
                            inviti cartacei come fanno tutti?
                        </div>
                        <div className="answer text-24 m-text-20 align-right mt-20 m-align-left">
                            Questa scelta ha diverse motivazioni, ora ve ne&nbsp;
                            <br />
                            elencheremo un paio: <b>fare siti web è il nostro lavoro</b>,&nbsp;
                            <br />
                            Agnese progetta la parte grafica e Yevgeniy mette in&nbsp;
                            <br />
                            piedi il sito vero e proprio, quindi volevamo mostrarvi&nbsp;
                            <br />
                            una piccola parte della nostra routine, inoltre crediamo&nbsp;
                            <br />
                            che sia <b>arrivato il momento di utilizzare meno carta</b>&nbsp;
                            <br />
                            possibile, per il nostro pianeta e per noi stessi.
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                    </div>
                </div>

                <div className="row">
                    <div className="d-none d-md-block col-md-6 separator">
                    </div>
                    <div className="col-12 col-md-6 pt-20 m-pt-40 m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-left m-align-left">
                            C’è un <span className="very-peri">dress code</span> da rispettare?
                        </div>
                        <div className="answer text-24 m-text-20 align-left mt-20 m-align-left">
                            Visto che siamo dei creativi non possiamo ignorare il&nbsp;
                            <br />
                            colore <span className="very-peri">Pantone del 2022, il “Very Peri”</span>, una tonalità di&nbsp;
                            <br />
                            blu pervinca, con sottotono viola e rosso, ed è <i>dedicato&nbsp;
                                <br />
                                al coraggio e alla ripartenza.</i>&nbsp;
                            <br />
                            Di conseguenza <b>TUTTE le nuance di viola/lilla</b> sono&nbsp;
                            <br />
                            ben accette, soprattutto per le donne, divertitevi a&nbsp;
                            <br />
                            scegliere il vostro viola, non vediamo l’ora di scoprirlo!
                        </div>

                        <div className="dress-code-dropdown text-24 m-text-20 mt-40 align-left" onClick={() => setOpen(prevCheck => !prevCheck)}>Tocca per vedere un esempio di palette cromatica<img src={open ? top : bottom} /></div>
                        <div className="d-none d-md-flex align-left">
                            <img src={palette} style={{ height: !open ? "0" : "26.5rem", marginTop: !open ? "0" : "1.25rem" }} className="dress-code-palette" />
                        </div>
                        <div className="d-flex d-md-none align-left">
                            <img src={palette} style={{ height: !open ? "0" : "auto", marginTop: !open ? "0" : "1.25rem" }} className="dress-code-palette" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 pt-20 m-pt-40 separator m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-right m-align-left">
                            Non ho fatto il vaccino e non ho&nbsp;
                            <br />
                            intenzione di tamponarmi, che faccio?
                        </div>
                        <div className="answer text-24 m-text-20 align-right mt-20 m-align-left">
                            Ora come ora non possiamo sapere quali saranno le&nbsp;
                            <br />
                            <b>normative COVID</b> per Aprile, contattateci in caso.
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                    </div>
                </div>

                <div className="row">
                    <div className="d-none d-md-block col-md-6 separator">
                    </div>
                    <div className="col-12 col-md-6 pt-20 m-pt-40 m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-left m-align-left">
                            Non sono stato invitato, non siamo&nbsp;
                            <br />
                            amici/parenti?!
                        </div>
                        <div className="answer text-24 m-text-20 align-left mt-20 m-align-left">
                            Per via del COVID abbiamo preferito fare <b>una cosa&nbsp;
                                <br />
                                ristretta</b> e festeggiare con le persone più care, ma se&nbsp;
                            <br />
                            vuoi possiamo prenderci un caffé insieme!
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 pt-20 m-pt-40 separator m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-right m-align-left">
                            Come posso raggiungere la location?
                        </div>
                        <div className="answer text-24 m-text-20 align-right mt-20 m-align-left">
                            “La porta del principe” si trova vicino alla Nuova Fiera&nbsp;
                            <br />
                            di Roma che è ben collegata con il treno, altrimenti è&nbsp;
                            <br />
                            <b>facilmente raggiungibile in auto.</b>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                    </div>
                </div>

                <div className="row">
                    <div className="d-none d-md-block col-md-6 separator">
                    </div>
                    <div className="col-12 col-md-6 pt-20 pb-20 m-pb-40 m-pt-40 m-separator">
                        <div className="question text-32 m-text-30 semibold-text align-left m-align-left">
                            Sono in macchina, riuscirò a trovare&nbsp;
                            <br />
                            parcheggio vicino alla location?
                        </div>
                        <div className="answer text-24 m-text-20 align-left mt-20 m-align-left">
                            “La porta del principe” dispone di un <b>ampio parcheggio&nbsp;
                                <br />
                                gratuito</b> all’interno dei cancelli della struttura.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Faq;