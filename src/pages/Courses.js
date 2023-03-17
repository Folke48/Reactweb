import React from "react";
import {Link} from "react-router-dom";

const Print = () =>{
    console.log('Print');        
    let printContents = document.getElementById('printablediv').innerHTML + document.getElementById('printabledivTwo').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }

class Coureses extends React.Component{
    render() {
        return(
            <div className="info">
                <div id="printablediv">
                    <h3>Kursutbud</h3>
                    <h5>Nedan hittar du information om de kurser vi erbjuder.</h5>
                    <hr/>

                    <div className="viktig-info">
                        <p><strong>Viktig information</strong></p>
                        <p>Gällande pandemisituationen som råder så följer vi givetvis Folkhälsomyndigheternas rekommendationer.
                            Vi tar inte i hand när vi hälsar och vi håller avstånd när vi sitter, står eller går.
                            Vi stannar så klart hemma om vi har några förkylningssymtom.
                            Skärps restriktionerna ytterliga så tar vi inte någon avbokningsavgift om det blir så att vi måste ställa in planerade kurser.
                            Vi tar alla vårt ansvar. Munskydd finns att tillgå på plats, engångshanddukar och handsprit finns på toaletten.</p>
                    </div>

                    <table className="table_one">
                    <tr>
                        <td><h4><strong>KURS</strong></h4></td>
                        <th><h4><strong>PRISKLASS</strong></h4></th>
                    </tr>
                    <tr>
                        <td><p><strong>Vardagslydnad</strong> <br/>
                            Att lyssna och följa, miljöträning, hantering och inkallning.<br/>
                            För mer information om kursen klicka här!</p>	</td>
                        <th><p>1250 kr</p></th>
                    </tr>
                    <tr>
                        <td><p><strong>Valpkurs</strong> <br/>
                            Att lyssna och följa, miljöträning, hantering och inkallning.<br/>
                            För mer information om kursen klicka här!</p>	</td>
                        <th><p>1250 kr</p></th>
                    </tr>
                        <tr>
                        <td><p><strong>Fårvallning: Vårens Nybörjarkurs</strong> <br/>
                            Är du intresserad utav att prova på vallning med din vallhund? <br/>
                            För mer information om kursen klicka här!</p>	</td>
                        <th><p>500 kr</p></th>
                    </tr>
                        <tr>
                        <td><p><strong>Fårvallning: Privatlektioner & Träningsgrupper</strong> <br/>
                            Privatlektion för dig som är erfaren eller nybörjare, samt i grupp om två eller flera.<br/>
                            För mer information privat- och gruppträning klicka här!</p>	</td>
                        <th><p>200-900 kr</p></th>
                    </tr>
                    <tr>
                        <td><p><strong>Fårvallningskurs 2023 steg 1-3</strong> <br/>
                            Tre-stegskurs i fårvallning med målsättning för vallhundsprov. <br/>
                            För mer information kursen klicka här!</p>	</td>
                        <th><p>1800 kr</p></th>
                    </tr>
                    <tr>
                        <td><p><strong>Skaffa höns-/fårkurs</strong> <br/>
                            Drömmer du om en egen flock höns/får, men har frågor och funderingar kring vad som är bra att känna till. <br/>
                            För mer information kurserna <Link to="/courspage"> klicka här! </Link> </p></td>
                            
                        <th><p>1500 kr</p></th>
                    </tr>
                    <tr>
                        <td><p><strong>Övriga vallhundstjänster</strong> <br/>
                            Specialanpassad vallningsträning, vallhundar för träning, telefonsupport m.m
                            Varje träningspass individanpassas. Alla vallhundsraser är välkomna. <br/>
                            För mer information om övriga tjänster som vi erbjuder klicka här!</p>	</td>
                        <th><p>Ges som kostnadförslag eller <br/>enligt överenskommelse.</p></th>
                    </tr>
                    </table>
                </div>
                    <button onClick={Print} className="print"><i className="fas fa-print"></i>Skriv ut kurs- och bokningsinformation</button>
                    <br/>

                    <hr/>
                    <div className="book">
                        <h3><strong>Bokning av kurser</strong></h3>
                        <h5>Fyll i bokningsformuläret för att boka in dig på en kurs.</h5>
                        <hr/>
                        <p>Vid boknnig, i <i>Beskrivning</i>, skriv kort vilken kurs (kursnamn och datum)
                            du vill boka så återkommer vi med bokningsbekräftelse till den angivna mejladressen då den blivit genomförd. <br/><br/>
                            Här går det bra att även ställa frågor i samband med bokningen, t.ex. att välja rätt kurs utifrån tidigare erfarenhet.
                            <br/> Beskriv då vilken erfarenhet du har, och vad du önskar lära dig så gudiar vi dig till den kurs som passar bäst.
                        </p>

                        <form action="mailto:gardsbacken@telia.com" method="post" enctype="text/plain">
                        <fieldset className="form">
                            <legend><p>Bokningsformulär</p></legend>
                            <p className="Form-p"><label for="beskrivning">Beskrivning:</label></p>
                            <textarea name="beskrivning">Jag vill boka en plats i..</textarea>
                            <p><label for="fname">Förnamn:</label></p>
                            <input type="text" name="fname" value="Ditt namn.."/>
                            <p><label for="lname">Efternamn:</label> </p>
                            <input type="text" name="lname" value="Ditt namn.."/>
                            <p><label for="email">Mejladress:</label> </p>
                            <input type="email" name="email" value="exempel@adress.se"/>
                            <input type="submit" className="send" value="Skicka"/>
                        </fieldset>
                        </form>
                    </div>

                    <div id="printabledivTwo">
                        <div className="book_print">
                            <h3><strong>Bokning av kurser</strong></h3>
                            <h5>Kan du inte boka via bokningsformuläret på webbsidan går det också bra att skicka ett mejl eller ringa oss.</h5>
                            <hr/>
                            <p>Vid boknnig via mejl, skriv för- och efternamn samt beskriv kort vilken kurs (kursnamn och datum)
                                du vill boka så återkommer vi med bokningsbekräftelse då den blivit genomförd. <br/><br/>
                                Här går det bra att även ställa frågor i samband med bokningen, t.ex. att välja rätt kurs utifrån tidigare erfarenhet.<br/>
                                Beskriv då vilken erfarenhet du har, och vad du önskar lära dig så gudiar vi dig till den kurs som passar bäst.
                                <br/><br/>
                                Ringer du genomför vi bokningen direkt.
                            </p>
                        </div>
                    


                        <br/>
                        <p>Har du övriga frågor är du varmt välkommen att ta kontakt med oss! <br/>
                            Telefon: <a href="tel: 070-6597199">070-6597199</a> eller <a href="tel: 0660-93199">0660-93199</a><br/>
                            Mejl: <a href="mailto:gardsbacken@telia.com">gardsbacken@telia.com</a> <br/>
                            Mer kontaktinformation hittar du på <Link to="/contact"> Kontakta oss!</Link></p>
                            
                    </div>
                    <hr/>
                
            </div>
        );
    }
}

export default Coureses;