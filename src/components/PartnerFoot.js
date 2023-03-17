import React from "react";
import {Link} from "react-router-dom";

class PartnerFoot extends React.Component {
    render() {
        return (
            <div className="footer">
  
                <div className="foot">
                    <div>
                        <p>Copyright © 2022 Gårdsbackens Hundcenter Alla rättigheter reserverade.</p>
                    </div>
    
                    <div className="block">
                    <Link to="/contact" title="Kontakta oss" className="spec-link"><i className="far fa-comment"></i>Kontakta oss!</Link>
                        <p className="footer-links-two"><a title="Gårdsbackens Facebook" href="https://www.facebook.com/Gardsbacken"  class="spec-link"><i class="fa fa-facebook-f"></i>Facebook</a></p>
                        <p className="footer-links-three"><a title="Gårdsbackens Instagram" href="https://www.instagram.com/gardsbackenshundcenter/"  class="spec-link"><i class="fa fa-instagram"></i>Instagram</a></p>
                    </div>
    
                </div>
            </div>
        );
    }
}

export default PartnerFoot;