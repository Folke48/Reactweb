import React from "react";
import {Link} from "react-router-dom";

function enlargeImg() {
    document.getElementById("enlarge_box").style.display = "block";
    document.getElementById("caption").innerHTML = document.getElementById("sImg").alt;
}
function closeImg() {
    document.getElementById("enlarge_box").style.display = "none";
}

class Home extends React.Component{
    render() {
        return (    
            <div className="start-grid">
                <div className="main">
                    <div className="title">
                    <h3>Välkommen till Gårdsbacken</h3>
                    <h4>Vi ser det som ett stort förtroende att få ta hand om dig och din hund</h4>
                    </div>
                    <hr />
                    <div className="line">
                        <h5>Inlägg</h5>
                    </div>
                    <article className="inlagg">
                        <h4>Lite rönnbär, mycket snö…</h4>
                        <h6>19 januari, 2023</h6>
                        <p>Hur är det nu… ”Lite rönnbär, mycket snö…” eller ”Lite rönnbär, lite snö…”? <br />
                            Fast nu vet jag… Det har väl aldrig stått så klart som i år,
                            då rönnarna under sensommaren inte bar på ETT ENDA RÖNNBÄR och snön vräker ner mest varje dag nu under vintern,
                            här på Gårdsbacken… ❄❄❄❄ Träden tänker inte bära tungt två gånger…</p>
                        <img src="http://gardsbacken.se/wp-content/uploads/2023/01/b360.jpg" alt="Hundar i snön" width="40%" />
                        <p>Behöver du hundpassning…? <br/>
                            Vi på Gårdsbacken har de utbildningar, lokaler och tillstånd som krävs för en seriös verksamhet.
                            Varmt välkommen att kontakta oss på Gårdsbacken om du vill veta mer…</p>
                    </article>
                    <hr />
                    <article className="inlagg">
                        <h4>Varmt Välkommen!</h4>
                        <h6>13 januari, 2023</h6>
                        <p>Vi välkomnar ljuset… För visst kan vi se skillnad redan nu, en bit in i januari,
                            att dagarna redan är ljusare… och längre… Vi välkomnar även dig, med hund som behöver passning…
                            Gårdsbackens Hundcenter AB erbjuder hundpensionat, hunddagis samt hundkurser…</p>
                            <img src="http://gardsbacken.se/wp-content/uploads/2023/01/b359.jpg" alt="Hundar i snön" width="40%" />
                    </article>
                    <hr />
                </div>

                <div className="news">
                    <div className="box">
                        <div className="box_title">
                            <h5>Senaste nytt</h5>
                        </div>
                            <hr />
                            <p>Vi erbjuder numera även valp- och vardagslydnads-kurser!
                            <br /> Besök <Link to="/courses">vårt kursutbud</Link> för mer information.</p>
                            <hr />
                    </div>
                </div>

                 <div className="archive">
                    <div className="box">
                        <div className="box_title">
                            <h5>Senaste inlägg</h5>
                        </div>
                    <hr />
                    <p> Lite rönnbär, mycket snö… 19 januari, 2023 </p>
                    <hr />
                    <p> Varmt Välkommen! 13 januari, 2023 </p>
                    <hr />
                    <p> Gott Nytt 2023 önskar vi på Gårdsbacken 30 december, 2022 </p>
                    <hr /><br />
                    <div class="go-box">
                        <Link to="Archive" className="go-to"> Gå till arkivet <i className="fa fa-arrow-right"></i></Link>
                    </div>

                    </div>
                </div> 

                <div className="help">
                    <div className="box">
                         <div className="box_title">
                              <h5>Hundar i behov av hjälp</h5>
                              <hr />
                        </div>
                        <Link to="/construction">
                        <img id="hImg" src="http://gardsbacken.se/wp-content/uploads/2021/03/narentassorg.jpg" alt="En tass i en hand" width="100%" /></Link>
                        <h6>(Klicka på bilden för att komma till ny sida)</h6><br />
                    </div>
                </div>

                <div className="mark">
                    <div className="box">
                        <div className="m-box">
                            <img  onClick={enlargeImg} id="sImg" src="http://gardsbacken.se/wp-content/uploads/2021/01/sh3.jpg"
                            alt="H-märket utfärdat 2021 av sveriges hunföretagare." width="100" height="auto" />
                            <h6>(Klicka på bilden för att förstora den)</h6>

                            <div id="enlarge_box">
                                <div className="en_box">
                                    <img  id="bImg" src="http://gardsbacken.se/wp-content/uploads/2021/01/sh3.jpg" alt="H-märket utfärdat 2021 av sveriges hunföretagare." />
                                    <button onClick={closeImg} className="close"><i class="fa fa-close"></i></button>
                                    <h4 id="caption"> <p></p> </h4>
                                </div>
                            </div>
                        </div>
                        <p>Vi på Gårdsbacken är stolta medlemmar i Svenska Hundföretagare. Ett medlemskap visar att man driver
                            ett seriöst hundföretag, med de utbildningar som krävs.<br /><br />Gå till <a href="https://sverigeshundforetagare.se/" title="Sveriges Hundföretagere"> sverigeshundforetagare.se</a> 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
