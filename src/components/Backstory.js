import React, { useEffect } from 'react';

function Backstory() {

    useEffect(() => {
        console.log("jnedbewd");
        $('#el').scrollFadeOut(460, 0+200);
        $('#el2').scrollFadeOut(460, 900+200);
        $('#el3').scrollFadeOut(460, 1800+200);
        

    }, [])

    return (
        <div>
            <section id="el" className="section">1</section>
            <br></br>
            <br></br>
            <section id="el2" className="section">2</section>
            <br></br>
            <br></br>
            <section id="el3" className="section">3</section>
            <br></br>
            <br></br>
            <section id="el4" className="section">4</section>
        </div>

    );
}

export default Backstory;