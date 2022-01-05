import React, { useState, useEffect } from 'react';
import axios from 'axios';
import photo2 from '../images/photo2.jpg';
import sfondo1 from '../images/sfondo1.svg';

function ConfirmInvitation(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [invited, setInvited] = useState([]);
    const [confirmed, setConfirmed] = useState(false);

    const fetchData = () => {

        (async () => {
            var res = await axios.post('getInvited.php', { "firstName": firstName, "lastName": lastName });
            console.log(res.data);
            if (res.data.res.length) {
                setInvited(res.data.res);
            }
        })()
    }


    const handleCancel = () => {
        setInvited([]);
        setFirstName('');
        setLastName('');
    }

    const handleConfirm = () => {
        var items = { ...invited };
        for (var i = 0; i < invited.length; i++) {
            var id = invited[i].id;
            items[i].state = $(`.form-check-input[name="radio_${id}"]:checked`).val();
        }
        console.log(items);

        (async () => {
            var res = await axios.post('updateInvited.php', { "invited": JSON.stringify(items) });
            console.log(res);

            setConfirmed(true);
        })()
    }


    const confirmCard = () => {

        var disabled = (firstName !== "" && lastName !== "") ? "" : "disabled-button";
        console.log(disabled);
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-40 m-text-30 semibold-text mt-80 m-mt-20">
                            Verifica se sei stato invitato e conferma la tua presenza
                        </div>
                        <div className="text-24 m-text-20 mt-10 m-mt-20">
                            Inserisci il tuo nome e cognome, se con te sono stati previsti accompagnatori&nbsp;
                            <br className="d-none d-md-block" />
                            potrai confermare la loro presenza successivamente.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-none d-md-flex col-md-6 mt-40">
                        <div className="our-photo" style={{ "width": "19rem", "margin": "auto" }}>
                            <img src={photo2} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-80 m-mt-40 d-flex flex-column text-align-left">
                        <label htmlFor="first_name" className="form-label text-18 m-text-18">Nome</label>
                        <input type="text" className="confirm-form text-16 m-text-16" id="first_name" placeholder="Inserisci il tuo nome" onChange={(e) => setFirstName(e.target.value)} />

                        <label htmlFor="last_name" className="form-label text-18 m-text-18 mt-20">Cognome</label>
                        <input type="text" className="confirm-form text-16 m-text-16" id="last_name" placeholder="Inserisci il tuo cognome" onChange={(e) => setLastName(e.target.value)} />

                        <button className={`confirm-button semibold-text text-18 m-text-18 mt-40 m-mb-20 ${disabled}`} onClick={() => fetchData()}>VERIFICA L'INVITO</button>
                    </div>
                </div>
            </>
        );
    }

    const invitedCard = () => {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-40 m-text-30 semibold-text mt-80 m-mt-20">
                            Che bello sei stato invitato!
                        </div>
                        <div className="text-24 m-text-20 mt-10 m-mt-20">
                            Conferma la tua presenza e, se presenti, quella dei tuoi accompagnatori.
                        </div>
                    </div>
                </div>
                <div className="mt-40">

                    {
                        invited.map((item, i) => {
                            var index = String(i + 1).padStart(2, '0');
                            var state_yes = (item.state === "accettato") ? true : false;
                            var state_no = (item.state === "in attesa" || item.state === "rifiutato") ? true : false;
                            return (
                                <div key={item.id} className="row mb-20">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 text-align-left text-32" ><span style={{ "color": "#91868C" }}>{index}.</span> {item.first_name} {item.last_name}</div>
                                    <div className="col-md-6">
                                        <div className="form-check form-check-inline mr-80">
                                            <input className="form-check-input" type="radio" name={"radio_" + item.id} id={"yes_" + item.id} value="accettato" defaultChecked={state_yes} />
                                            <label className="form-check-label text-24" htmlFor={"yes_" + item.id}>
                                                Ci sarò
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name={"radio_" + item.id} id={"no_" + item.id} value="rifiutato" defaultChecked={state_no} />
                                            <label className="form-check-label text-24" htmlFor={"no_" + item.id}>
                                                Non ci sarò
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row bottom-buttons">
                    <div className="col-12 col-md-6 mt-80 m-mt-40 align-right">
                        <button className="cancel-button semibold-text text-18 m-text-18 mt-40 m-mb-20" onClick={() => handleCancel()}>ANNULLA</button>
                    </div>
                    <div className="col-12 col-md-6 mt-80 m-mt-40 align-left">
                        <button className="confirm-button semibold-text text-18 m-text-18 mt-40 m-mb-20" onClick={() => handleConfirm()}>CONFERMA</button>
                    </div>
                </div>
            </>
        );
    }


    const successCard = () => {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-40 m-text-30 semibold-text mt-80 m-mt-20">
                            Conferma effettuata!
                        </div>
                        <div className="text-24 m-text-20 mt-10 m-mt-20">
                            Grazie per averci dedicato il tuo tempo, in caso di errore o ripensamenti contattaci.
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <section id="confirm" className="row margin wallpaper" style={{ "backgroundImage": `url(${sfondo1})`, "height": "100vh" }}>
            <div className="col-12 col-md-10 confirm-card">
                {
                    confirmed
                        ? successCard()
                        : [
                            (
                                invited.length
                                    ? invitedCard()
                                    : confirmCard()
                            )
                        ]
                }


            </div>
        </section >
    );
}


export default ConfirmInvitation;