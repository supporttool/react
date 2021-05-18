
import logo from '../images/logo.png';
import chatbotscreen from '../images/botscreen.jpg';
import {NavLink} from 'react-router-dom';

function Specifiedsearch(){
    const optionSelectChannel = "Select channel";
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
                <div className="chatbotBubble">
                    <img src={chatbotscreen} />
                </div>
                <div className="loginFormbx">
                    <h3>API Status Results</h3>
                    <div className="tableApiResult">
                        <div className="apiresultHeader">
                            <ul>
                                <li>API name</li>
                                <li>Failure</li>
                                <li>Success</li>
                            </ul>
                        </div>
                        <div className="apiresultHeader apiresultBody">
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Dummy text</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specifiedsearch