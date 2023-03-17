import React from "react";
import {NavLink} from "react-router-dom";

// Open and close the menu with button or on window click.
function openMenu() {
    var menu = document.getElementById("bigMenu");
    var btn =  document.getElementById("mBtn");

    var navLinks = document.querySelectorAll("#bigMenu li a");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            menu.style.display = "none";
            btn.style.backgroundColor = "";
        });
    });

    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function(dropdown) {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        var clickedIcon = dropdown.previousElementSibling.querySelector(".menuIcon");
        clickedIcon.style.backgroundColor = "";
        clickedIcon.style.transform = "";
      }
    });

    if (menu.style.display === "none"){
        menu.style.display = "block";
        btn.style.backgroundColor = "#F69823";
    } else {
        menu.style.display = "none";
        btn.style.backgroundColor = "";
    }
}

window.addEventListener('click', function(event) {
    var menu = document.getElementById("bigMenu");
    var btn =  document.getElementById("mBtn");

    if (menu.style.display === "block") {
        if (event.target !== btn && !menu.contains(event.target)) {
            menu.style.display = "none";
            btn.style.backgroundColor = "";

            var dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
                var clickedIcon = dropdown.previousElementSibling.querySelector(".menuIcon");
                clickedIcon.style.backgroundColor = "";
                clickedIcon.style.transform = "";
            }
            });
        }
    }
});

// Open the menu options
  
  function openOption(event) {
    var clickedIcon = event.currentTarget;
    var options = clickedIcon.parentNode.nextElementSibling;
  
    if (options.style.display === "none") {
      options.style.display = "block";
      clickedIcon.style.backgroundColor = "#F69823";
      clickedIcon.style.transform = "rotate(180deg)";
    } else {
      options.style.display = "none";
      clickedIcon.style.backgroundColor = "";
      clickedIcon.style.transform = "";
    }
  }

class Menu extends React.Component {
    render() {
        return (
                <div className="menu">
                    <div className="menu-box">
                        <button  onClick={openMenu} id="mBtn" className="menuBtn">
                            <p><i className="fa fa-bars"></i>Meny</p>
                        </button>
                        <ul id="bigMenu">
                        <li><NavLink to="/">Start</NavLink></li>
                        <li className="dropdown">
                            <div className="menuFlex">
                                <NavLink to="construction" className="dropbtn">Vi på Gårdsbacken</NavLink>
                                <div onClick={openOption} className="menuIcon" id="mI">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="dropdown-content">
                            <NavLink to="construction">Personal</NavLink>
                            <NavLink to="construction">Djuren på gården</NavLink>
                            <NavLink to="contact">Kontakta oss</NavLink>
                            </div>
                        </li>
                        <li className="dropdown">
                            <div className="menuFlex">
                                <NavLink to="construction" className="dropbtn">Pensionat- och dagisverksamhet</NavLink>
                                <div onClick={openOption} className="menuIcon">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <NavLink to="construction">Priser och information</NavLink>
                                <NavLink to="construction">Ett första besök</NavLink>
                                <NavLink to="construction">En dag på pensionatet</NavLink>
                            </div>
                        </li>
                        <li className="dropdown">
                            <div className="menuFlex">
                                <NavLink to="construction" className="dropbtn">Kurser och träning</NavLink>
                                <div onClick={openOption} className="menuIcon">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                                <div className="dropdown-content">
                                <NavLink to="construction">Vår träningsfilosofi</NavLink>
                                <NavLink to="courses">Kursutbud</NavLink>
                                <NavLink to="construction">Gårdsbackens instruktörer</NavLink>
                                </div>
                        </li>
                        <li><NavLink to="construction">Gårdsbacken säljer</NavLink></li>
                        <li><NavLink to="partners">Våra samarbetspartners</NavLink></li>
                        </ul>
                    </div>
                </div>
  
        );
    }
}

export default Menu;