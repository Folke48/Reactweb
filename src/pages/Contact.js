import React from "react";

const Print = () =>{    
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
   console.log('Print');  
} 

class Contact extends React.Component{      
    render() {
        return(
        
            <div className="else-grid">
                <div className="info">
                    <div id="printablediv">
                        <h3>Kontakta oss på Gårdsbacken</h3>
                        <h5>Varmt välkommen att kontakta oss på Gårdsbacken. Oavsett vad du har för funderingar,
                            vare sig det gäller hundpensionat, hunddagis och/eller hundkurser, tveka inte att höra av er, så berättar vi mer…<br/><br/>
                            Paula & Danne</h5>
                        <hr/>
                        <h4>Telefonnummer</h4>
                        <p> <a href="tel: 070-6597199">070-6597199</a> eller <a href="tel: 0660-93199">0660-93199</a></p>
                        <hr/>
                        <h4>E-postadress</h4>
                        <p> <a href="mailto:gardsbacken@telia.com">gardsbacken@telia.com</a> </p>
                        <hr/>
                        <h4>Adress</h4>
                        <p>Västergundsjö 127 <br/>89192 Örnsköldsvik </p>
                        <hr/>
                        <h4>Vägbeskrivning</h4>
                        <p>Gårdsbackens Hundcenter ligger i den natursköna lilla byn Västergundsjö, ca 2 mil från Örnsköldsvik, efter väg 352, Björnavägen.
                            Skyltat VÄSTERGUNDSJÖ och HUNDPENSIONAT.</p>
                            <img src="http://gardsbacken.se/wp-content/uploads/2020/12/f2.jpg" alt="Vägskylt" width="200px" height="auto"/>

                        <p>Sväng höger in på byvägen och kör därefter några 100 meter. Passera ett rött litet hus
                            på vänster sida, fortsätt rakt fram, nerför backen en bit. När åkern öppnar upp så har du vår avfart till gården på höger sida.
                            Det är andra avfarten till höger, totalt sett efter byvägen. En svart smidesskylt med texten GÅRDSBACKEN, pryder vår avfart,
                            titta efter den. Den vägen leder fram till vår gård.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaOsri5w84H3Oxkn-QY2vCauAEAadEpJTNQ&usqp=CAU" alt="Vägskylt" width="200px" height="auto"/>
                        <hr/>
                        <h4>Sociala medier</h4>
                        <p> Fackebook: <a href="https://www.facebook.com/Gardsbacken">www.facebook.com/Gardsbacken</a> </p>
                        <p> Instagram: <a href="https://www.instagram.com/gardsbackenshundcenter/">www.instagram.com/gardsbackenshundcenter</a> </p>
                        <hr/>

                        <button onClick={Print} className="print"><i className="fas fa-print"></i>Skriv ut kontaktinformation</button>
                    </div>
                </div>

                <div className="side">
                    <a href="https://www.google.com/maps/place/G%C3%A5rdsbackens+Hundcenter/@63.4392997,18.5777231,17z/data=!4m5!3m4!1s0x467b5cf32f38bb53:0x30c00a45950f2222!8m2!3d63.4392909!4d18.5776252">
                        <img id="hImg" src="https://www.google.com/maps/vt/data=AjILtlFLyqw4hzGxgD9SfUwbUO8dRIZnKFjeuZHT--8Ktdr9MHt9zQhhB27SJWakJjlpAnPlFhGJMOURZ1CGP7cjZ_KXMFUoREpeqh5MHQWr8wbjTQuZPt4pN_OjTmC3efoTjt3CytCJbqYjHsAWr01veLb7M7-TL3HbU2JZebRksjnwcmU-VgwD1WTH6mBBDPJHZQgblncCGg"
                        alt="Karta till Gårdsbacken"/></a>
                    <h6>(Klicka på bilden för att komma till en karta)</h6>
                </div>
            </div>
        );
    }
}

export default Contact;