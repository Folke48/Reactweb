import React from "react";
import {Link} from "react-router-dom";

const Print = () =>{
    console.log('Print');        
    let printContents = document.getElementById('printablediv').innerHTML;
    let printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write(printContents);
    printWindow.document.close();

  printWindow.onbeforeprint = () => {
    console.log('Print dialog opened');
  };

  printWindow.onafterprint = () => {
    console.log('Print dialog closed');
    printWindow.close();
  };

  printWindow.print();
}

class CoursPage extends React.Component{
    render() {   
        return(
            <div className="else-grid">
                <div class="info">
                    <Link to="/courses" class="back"> <i class="fa fa-arrow-left"></i>Tillbaka till kursutbud</Link>

                     <div id="printablediv">
                        <div class="kurs">
                            <h3>Skaffa höns-/fårkurs</h3>
                            <h5>Drömmer du om att skaffa en egen flock, men har frågor och funderingar kring vad som är bra att känna till.
                                Vi på Gårdsbacken delar med oss av våra erfarenheter med att haft höns och får på gården i över tjugo år. <br/><br/>
                            <strong>Du behöver inte ha några förkunskaper om varken höns eller får.</strong></h5>
                            <hr/>
                            <h5><strong>Hönskurs</strong></h5>
                            <h4>Tid och plats:</h4>
                            <p>Söndagen 23:e april 2023 <br/>
                                Kl. 10:00-17:00 <br/>
                                Kursplats: Gårdsbacken, Västergundsjö 127, Örnsköldsvik <br/>
                                Kursledare: Paula W Lundberg och Danne Westman <br/></p>
                            <h4>Kursens målsättning:</h4>
                            <p>Målsättningen med kursen är att du efter kursdagens slut ska känna dig trygg och bekväm med att skaffa en egen flock höns.</p>
                            <h4>Kursinnehåll:</h4>
                            <p>Här nedan så kan ni läsa om några av punkterna som vi pratar om under kursdagen: <br/>
                            <ul className="coursContent">
                                <li>🐑 Genbank – vad menas med det?</li>
                                <li>🐑 Regler för stadshöns</li>
                                <li>🐑 Lantraser alt. värphybrider</li>
                                <li>🐏 Flockstorlek – tupp eller inte?</li>
                                <li>🐑 Praktiska detaljer med hönshuset och hönsgården</li>
                                <li>🐑 Ägglägging, ruvning och kycklingar</li>
                                <li>🐑 Utfordring</li>
                                <li>🐑 Daglig vård</li>
                                <li>🐑 Anatomi och mycket, mycket mer…</li>
                            </ul></p>
                            <h4>Praktisk information:</h4>
                            <p><strong>Pris: 1500 kronor/person</strong>, Lunch och fika ingår i priset. <br/>
                            I samtliga priser ingår moms på 25%, godkänd för F-skatt.</p>

                            <hr/>
                        </div>
                        <div className="kurs">
                            <h5><strong>Fårkurs</strong></h5>
                            <h4>Tid och plats:</h4>
                            <p>Söndagen 7:e maj 2023 <br/>
                                Kl. 10:00-17:00 <br/>
                                Kursplats: Gårdsbacken, Västergundsjö 127, Örnsköldsvik <br/>
                                Kursledare: Paula W Lundberg och Danne Westman <br/></p>
                            <h4>Kursens målsättning:</h4>
                            <p>Syftet och målsättningen med kursen är att kursdeltagarna, efter dagens slut,
                                ska känna sig inspirerade och trygga nog att skaffa en egen flock får.</p>
                            <h4>Kursinnehåll:</h4>
                            <p>Här nedan så kan ni läsa om några av punkterna som vi pratar om under kursdagen: <br/>
                            <ul className="coursContent">
                                <li>🐑 Jordbruksverkets lagar och regler</li>
                                <li>🐑 Olika fårraser och typ av får, som passar ens eget syfte…</li>
                                <li>🐑 Stängsling, aggregat, jordning</li>
                                <li>🐏 Betäckning, dräktighet, lamning</li>
                                <li>🐑 Foder, mineraler</li>
                                <li>🐑 Vallhundsuppvisning och den praktiska hjälp man har av en vallhund</li>
                                <li>🐑 Fårstallet</li>
                                <li>🐑 Klippning och verkning av klövar, och självklart mycket, mycket mer…</li>
                            </ul></p>
                            <h4>Praktisk information:</h4>
                            <p><strong>Pris: 1500 kronor/person</strong>, Lunch och fika ingår i priset. <br/>
                            Om avbokning sker en vecka innan kursstart så debiteras halva kurskostnaden. <br/>
                            I samtliga priser ingår moms på 25%, godkänd för F-skatt.</p>

                            <hr/>
                            <div className="book_print">
                                <p>Har du övriga frågor är du varmt välkommen att ta kontakt med oss! <br/>
                                    Telefon: <a href="tel: 070-6597199">070-6597199</a> eller <a href="tel: 0660-93199">0660-93199</a><br/>
                                    Mejl: <a href="mailto:gardsbacken@telia.com">gardsbacken@telia.com</a></p>
                            </div>
                        </div>
                    </div>
                    <button onClick={Print} className="print"><i className="fas fa-print"></i>Skriv ut kursinformation</button>
                </div>

                <div class="side">
                </div>
            </div>
        );
    }
}

export default CoursPage;
