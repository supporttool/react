
import logo from '../images/logo.png';
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import chatbotscreen from '../images/botscreen.jpg';
// import Resultsdownload from '../images/Resultsdownload';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function Checkapistatus(){
    const optionSelectChannel = "Select channel";    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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
                <div className="loginFormbx apistatusFormbx">
                    <h3>Check API Status</h3> 
                    <form>
                        <div className="datebx">
                            <p>Select start date</p>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />   
                        </div>
                        <div className="datebx">
                            <p>Select End date</p>
                            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                        </div>   
                        <select value="select bot">
                            <option value="A">Widget</option>
                            <option value="B">Whatsapp</option>
                            <option value="C">Landing</option>
                            <option value="C">Agent voice bot</option>
                        </select>   
                        {/* <a className="button" href="/searchoptions">Submit</a> */}
                        <a className="button">Submit</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkapistatus