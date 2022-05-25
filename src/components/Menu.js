import React from 'react';
import Nav from './Nav';

import pianta1 from '../images/pianta_menu.svg';
import pianta2 from '../images/pianta_menu.svg';

function Menu() {
  return (
    <>
      <Nav />
      <div className="Menu">
        <section id="menu" className="row margin" style={{ "position": "relative" }}>
          <img src={pianta1} className="d-none d-md-block pianta-menu-top" alt="pianta_menu" />
          <img src={pianta2} className="d-none d-md-block pianta-menu-bot" alt="pianta_menu" />
          <div className="col-md-12 mt-0">
            <div className="outlined m-text-64" style={{ "letterSpacing": "0.35rem" }}>MENU</div>

            <div className="row">
              <div className="col-md-12 mt-80 m-mt-40">
                <div className="row">

                  <div className="col-12 col-md-12 mb-20 m-mb-0">
                    <div className="text-32 m-text-30 semibold-text text-align-center m-align-center">
                      PRIMI PIATTI
                    </div>
                    <div className="text-24 m-text-20 mt-40 m-mt-20 text-align-center m-align-center">
                      Riso con zucca, guanciale, pistacchio e pecorino
                      <br />
                      <br />
                      Paccheri con astice, vongole veraci, rucola e pomodoro fresco
                    </div>
                  </div>

                  <div className="col-12 col-md-12 mt-80 m-mt-40 m-mb-80">
                    <div className="text-32 m-text-30 semibold-text text-align-center m-align-center">
                      SECONDO PIATTO
                    </div>
                    <div className="text-24 m-text-20 mt-40 m-mt-20 text-align-center m-align-center">
                      Filetto di maiale in crosta di senape ed erbe aromatiche, patate al forno,
                      verdure gratinate
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Ma che bel menu abbiamo qui <br /> ( ͡° ͜ʖ ͡°)</h1></div> */}
      </div>
    </>
  )
}

export default Menu