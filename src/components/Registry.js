import React, { useEffect } from 'react';
import japan from '../images/japan.svg';

function Registry(props) {

    useEffect(() => {
        $(".registry-button").popover({
            placement: 'bottom',
            title: 'IBAN copiato!'
        });
    }, [])

    const copyToClipboard = (e) => {
        var value = document.getElementById("iban").value;
        navigator.clipboard.writeText(value);
        $('.registry-button').popover('show');
        setTimeout(function () {
            $('.registry-button').popover('hide');
        }, 2000);

    };

    return (
        <section id="registry" className="row margin mb-120 m-mb-80" style={{ "position": "relative" }}>
            <img src={japan} className="japan" alt="japan" />
            <div className="col-md-12 mt-80">
                <div className="outlined m-text-64" style={{ "letterSpacing": "0.35rem" }}>GIAPPONE</div>

                <div className="row">
                    <div className="col-md-10 registry-card mt-40">

                        <div className="row">
                            <div className="col-12 col-md-7 mt-40">
                                <div className="text-32 m-text-30 semibold-text text-align-left m-align-center ml-40 m-ml-0">
                                    La vostra presenza è già un dono per noi,&nbsp;
                                    <br className="d-none d-md-block" />
                                    ma se voleste farci un regalo saremmo&nbsp;
                                    <br className="d-none d-md-block" />
                                    felici se ci aiutaste ad organizzare il&nbsp;
                                    <br className="d-none d-md-block" />
                                    nostro viaggio di nozze in Giappone
                                </div>
                                <div className="text-24 m-text-20 mt-20 text-align-left m-align-center ml-40 m-ml-0">
                                    Nel caso il COVID ostacolasse la partenza useremmo&nbsp;
                                    <br className="d-none d-md-block" />
                                    comunque il ricavato per quando si potrà viaggiare,&nbsp;
                                    <br className="d-none d-md-block" />
                                    ogni centesimo è importante per noi, grazie mille.
                                </div>
                                <div className="d-none d-md-block text-14 m-text-14 mt-20 text-align-left m-align-center ml-40 mb-40 m-ml-0">
                                    Per comodità abbiamo preferito indicare il cc di Agnese, ma il totale sarà ugualmente diviso&nbsp;
                                    <br className="d-none d-md-block" />
                                    per entrambi. In caso di problemi non esitate a contattarci.
                                </div>
                            </div>
                            <div className="col-12 col-md-5 mt-40">
                                <div className="mr-40 m-mr-0 d-flex flex-column text-align-left iban-card">
                                    <label htmlFor="iban_owner" className="form-label text-18">Intestatario</label>
                                    <input type="text" className="registry-form text-16 m-text-16" id="iban_owner" value="TISI AGNESE" readOnly />

                                    <label htmlFor="iban" className="form-label text-18 mt-20">IBAN</label>
                                    <input type="text" className="registry-form text-16 m-text-16" id="iban" value="IT53B0347501605CC0011309852" readOnly />

                                    <button type="button" className="registry-button semibold-text text-18 m-text-18 mt-20 m-mt-40" onClick={(e) => copyToClipboard(e)}>COPIA IBAN</button>
                                    <div className="d-block d-md-none text-14 m-text-14 mt-20 text-align-left m-align-center ml-40 mb-40 m-ml-0">
                                        Per comodità abbiamo preferito indicare il cc di Agnese, ma il totale sarà ugualmente diviso&nbsp;
                                        <br className="d-none d-md-block" />
                                        per entrambi. In caso di problemi non esitate a contattarci.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}

export default Registry;