


import logo from '../images/logo.png';
import iconSpecifiedSearch from '../images/iconSpecifiedSearch.png';
import iconCheckApistatus from '../images/iconCheckApistatus.png';
import iconGetFullLogs from '../images/iconGetFullLogs.png';
import iconGetData from '../images/iconGetData.png';
import chatbotscreen from '../images/botscreen.jpg';
import {NavLink} from 'react-router-dom';

function Searchoptions(){
    return(        
        <div className="mainportal">     
            <div className="logout">
                <NavLink exact to="/">Log out</NavLink>
            </div>      
            <div className="backgroundOpacity"></div>
            <div className="loginbx">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="loginFormbx">
                    <h3>Please Select an option from below</h3>
                    <div className="Searchbox">
                        <ul>
                            <li>                                
                                <p><img src={iconSpecifiedSearch} alt="icon" /> 
                                <span><NavLink exact to="/specifiedsearch">Specified Search</NavLink></span></p>
                            </li>
                            <li>                                
                                <p><img src={iconCheckApistatus} alt="icon" /> 
                                <span><NavLink exact to="/checkapistatus">Check Api status</NavLink></span></p>
                            </li>
                            <li>                                
                                <p><img src={iconGetFullLogs} alt="icon" /> 
                                <span><NavLink exact to="/getfulllogs">Get Full logs</NavLink></span></p>
                            </li>
                            <li>                                
                                <p><img src={iconGetData} alt="icon" /> 
                                <span><NavLink exact to="/getdata">Get Data</NavLink></span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchoptions;