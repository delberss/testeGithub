import React from "react";
import '../Jornadas/style.css'


function Jornadas(){
    return(
        <div>
            <div className="content">

            <h2>Jornadas</h2>
                <div className="jornadas">

                    <div className="backend">
                        <h2>Back-end</h2>
                        <ul>
                            <li>PYTHON</li>
                            <li>GO</li>
                            <li>JAVA</li>
                            <li>JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="frontend">
                        <h2>Front-end</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT JS</li>
                            <li>REACT NATIVE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Jornadas;