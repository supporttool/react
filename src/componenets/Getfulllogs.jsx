
import logo from '../images/logo.png';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {NavLink} from 'react-router-dom';

function Getfulllogs(){
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
                    <h3>Get Data</h3> 
                    <form>
                        {/* <input type="text" placeholder="Select start date"/> */}
                        <p>Select start date</p>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />   
                        <p>Select End date</p>
                        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />   
                        {/* <input type="password" placeholder="Select end date"/> */}
                        <select>
                            <option >Select</option>
                            <option value="Claim Number">Claim Number</option>
                            <option value="B">Transactions</option>
                        </select>   
                        {/* <a className="button" href="/searchoptions">Submit</a> */}
                        <a className="button">Submit</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Getfulllogs;