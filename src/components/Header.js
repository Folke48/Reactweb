import React from "react";
import headImg from "./sheep_dog1.jpg";

//Alert when searching
function searchButton() {
    var input = document.getElementById("search");
    alert("Du sökte efter: " + input.value);
}
function search(event) {
    if (event.key === "Enter") {
      var input = document.getElementById("search");
      alert("Du sökte efter: " + input.value);
    }
  }

class Header extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="header">
                    <div className="header_top">
                        <div className="head_title">
                            <h1>
                            <span className="word1">Gårdsbackens </span>
                            <br className="mobile-break" />
                            <span className="word2">Hundcenter</span>
                            </h1>
                            <h2>För hunden i naturskön miljö…</h2>
                        </div>

                        <div className="search-container">
                                <input onKeyPress={search} type="search" placeholder="Sök.." style={{ fontFamily: "Century Gothic, sans-serif "}} id="search" />
                                <button onClick={searchButton} Title="Sök" type="submit" style={{ fontFamily: "Century Gothic, sans-serif "}}>
                                    <i className="fa fa-search"></i>
                                </button>
                        </div>
                    </div>

                    <div className="headPics">
                        <img src={headImg} alt="En hund som vallar får i solnedgång." className="dogSheep" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;