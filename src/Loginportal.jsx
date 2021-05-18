
import logo from './images/logo.png';
import chatbotscreen from './images/botscreen.jpg';
import {NavLink} from 'react-router-dom';

function loginportal(){
    return(
        
        <div className="mainportal">           
            <div className="backgroundOpacity"></div>
            <div className="loginbx">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="chatbotBubble">
                    <img src={chatbotscreen} />
                </div>
                <div className="loginFormbx">
                    <h3>Welcome to yara support tool!</h3>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="password"/>
                        <NavLink className="button" exact to="/searchoptions">Sign in</NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default loginportal