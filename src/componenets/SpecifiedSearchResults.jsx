
import logo from '../images/logo.png';
import chatbotscreen from '../images/botscreen.jpg';
import Resultsdownload from '../images/results-download.png';
import Resultsviewtag from '../images/results-view-tag.png';
import Resultstranscript from '../images/results-transcript.png';
import {NavLink} from 'react-router-dom';
// import Resultsdownload from '../images/Resultsdownload';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function SpecifiedsearchResults(){
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
                    <h3>Specified Search Results</h3> 
                    <div className="Searchbox">
                        <ul>
                            <li>                                
                                <div className="searchResultsItem">
                                    <div className="searchResultsIcon">
                                        <img src={Resultsdownload} alt="img" />
                                    </div>
                                    <p>Download Log</p>
                                </div>
                            </li>
                            <li>                                
                                <div className="searchResultsItem">
                                    <div className="searchResultsIcon">
                                        <img src={Resultsviewtag} alt="img" />
                                    </div>
                                    <p>View data tag</p>
                                </div>
                            </li>
                            <li>                                
                                <div className="searchResultsItem">
                                    <div className="searchResultsIcon">
                                        <img src={Resultstranscript} alt="img" />
                                    </div>
                                    <p>Transcript</p>
                                </div>
                            </li>
                            <li>                                
                                <div className="searchResultsItem">
                                    <div className="searchResultsIcon">
                                        <img src={Resultsdownload} alt="img" />
                                    </div>
                                    <p>Download Log</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecifiedsearchResults