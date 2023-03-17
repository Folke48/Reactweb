import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Video from "./pexels-kelly-lacy-7165757.mp4";

const OpenArchive = ({year}) => {
    const [toggle, setToggle] = useState(false)
    const [arrowAngle, setArrowAngle] = useState(0);

    return(                  
        <div className="container">
            <div className="options">
                <h2 onClick={() => {
                        setToggle(!toggle); 
                        setArrowAngle(arrowAngle === 0 ? -180 : 0);
                    }}>
                    {year}
                    <i className={`fa fa-angle-down arrow${toggle ? ' rotate' : ''}`} 
                    style={{ transform: `rotate(${arrowAngle}deg)` }}></i>
                </h2>
                {toggle && (
                    <div className="options-dropdown">
                        <table className="options-item">
                            <tr>
                            <td>
                                <a href="#jan">Januari</a> </td>
                            <td><a href="#feb">Februari</a></td>
                            <td><a href="#mar">Mars</a></td>
                            </tr>
                            <tr>
                            <td><a href="#apr">April</a></td>
                            <td><a href="#maj">Maj</a></td>
                            <td><a href="#jun">Juni</a></td>
                            </tr>
                            <tr>
                            <td><a href="#jul">Juli</a></td>
                            <td><a href="#aug">Augusti</a></td>
                            <td><a href="#sep">September</a></td>
                            </tr>
                            <tr>
                            <td><a href="#okt">Oktober</a></td>
                            <td> <a href="#nov">November</a> </td>
                            <td> <a href="#dec">December</a></td>
                            </tr>
                        </table>
                    </div>
                )}
            </div>
      </div>
 )
}

class Archive extends React.Component {

    render() {
        return(
            <div className="else-grid">
                <div className="info">
                    <NavLink to="/" className="back"> <i className="fa fa-arrow-left"></i>Tillbaka till start</NavLink>

                    <h3>Arkivet</h3>
                    <h5>Här hittar du alla inlägg vi på gårdsbacken har delat.</h5>
                    <hr/>
                    <h5><strong>Välj år och sedan månad för att se tidigare inlägg.</strong></h5>

                    <div className="ArchiveOptions">
                        <OpenArchive  year={2023} />
                        <OpenArchive  year={2022} />
                        <OpenArchive  year={2020} />
                        <OpenArchive  year={2021} />
                    </div>
                    <br/>
                    <hr/>

                </div>

                <div className="side">
                    <div className="Vid" >
                        <video width="320" height="240" controls autoplay muted>
                        <source src={Video} type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}

export default Archive;