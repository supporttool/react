
import logo from '../images/logo.png';
import chatbotscreen from '../images/botscreen.jpg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function Specifiedsearch(){
    const optionSelectChannel = "Select channel";
    return(
        <div className="mainportal">             
        <div className="logout">
            <NavLink exact to="/">Log out</NavLink>
        </div>    
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
                    <h3>Specified Search</h3>
                    <form>
                        <select value={optionSelectChannel}>
                            <option>Select channel</option>
                            <option value="B">Widget</option>
                            <option value="C">Whatsapp</option>
                            <option value="C">Landing</option>
                            <option value="C">Agent Voice Bot</option>
                        </select>
                        <select value="select">
                            <option>Select</option>
                            <option value="A">Registration number</option>
                            <option value="B">Email Id</option>
                            <option value="C">Policy</option>
                            <option value="C">Mobile Number</option>
                        </select>
                        <input type="text" placeholder="Enter registration number..."/>
                        <NavLink className="button" exact to="/specifiedsearchResults">Submit</NavLink>
                        <div className="forgotPass">
                            <h4>Forgot Password</h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Specifiedsearch