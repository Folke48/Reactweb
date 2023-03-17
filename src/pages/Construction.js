import React from "react";
import Paws from "./pawprints.jpg";

class Construction extends React.Component {
    render() {
        return(
            <div className="else-grid">
                <div class="info">
                    <h3>Ojdå, denna sida är under konstruktion!</h3>
                    <h5>Varmt välkommen att besöka en annan sida på vår webbplats, denna sida kommer inom kort.</h5>
                </div>

                <div class="side">
                    <div id="cover">
                    <div> id="mod" </div>
                    <img class="paws" src={Paws} alt="paw prints"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Construction;