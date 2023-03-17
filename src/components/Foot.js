import React from "react";
import {Link} from "react-router-dom";

class Foot extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="flex-samarbeten">
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2016/08/gunillas_optik.jpg" alt="Gunillas optik" width="216" height="87"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2021/01/rclogga1.jpg" alt="Royal canin" width="210" height="100"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2016/09/arrak.jpg" alt="Arrak outdoor" width="100" height="100"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2015/12/l2.jpg" alt="Friska fläktar" width="100" height="100"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2021/01/loggalogansidan.jpg" alt="Logan Whistles" width="213" height="126"/>
                    <img border="0.5"src="https://tidningen.djurskyddet.se/wp-content/uploads/2016/04/Granng%C3%A5rden-e1460558195944.jpg" alt="Granngården" width="150" height="90"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2021/02/obackalogga.jpg" alt="Öbacka djurhem" width="200" height="70"/>
                    <img border="0.5"src="http://gardsbacken.se/wp-content/uploads/2021/01/folkansvarttext.jpg" alt="Örnsköldsviks riksteaterförening" width="401" height="85"/>
                </div>
  
                <div className="foot">
                    <div>
                        <p>Copyright © 2023 Gårdsbackens Hundcenter Alla rättigheter reserverade.</p>
                    </div>
    
                    <div className="block">
                        <Link to="/contact" title="Kontakta oss" className="spec-link"><i className="far fa-comment"></i>Kontakta oss!</Link>
                        <p className="footer-links-two"><a title="Gårdsbackens Facebook" href="https://www.facebook.com/Gardsbacken"  className="spec-link"><i className="fa fa-facebook-f"></i>Facebook</a></p>
                        <p className="footer-links-three"><a title="Gårdsbackens Instagram" href="https://www.instagram.com/gardsbackenshundcenter/"  className="spec-link"><i className="fa fa-instagram"></i>Instagram</a></p>
                    </div>
    
                </div>
            </div>
        );
    }
}

export default Foot;