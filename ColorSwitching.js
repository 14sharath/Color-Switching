import React from 'react';
import './colorswitch.css';
import { useState } from 'react';
export const ColorSwitching= () => {


      
let [dark,setDark]=useState(false);
// Function to toggle dark mode
const moon = () => {
  setDark((isDark) => !isDark);
};

    
let [colorbox,setColorbox]=useState(false)
const sun=()=>{
   setColorbox((show)=> !show);
}

let[red,setRed]=useState(false)
const redColor=()=>{
  setRed((show)=>!show);
}

let[blue,setBlue]=useState(false);
const blueColor=()=>{
  setBlue((show=> !show))
}

let [green,setGreen]=useState(false);
const greenColor=()=>{
  setGreen((show)=> !green)
}

let [yellow,setYellow]=useState(false);
const yellowColor=()=>{
  setYellow((show)=> !show)
}

// let yellow=document.getElementsByClassName('.yellow')




  return (
    <>
    <div className="bg">
      <div className={`nav-bg ${dark? "navdark":""} ${red ? "red":""} ${blue? "blue":""} ${green? "green":""} ${yellow? "yellow":""}`}>
        <div className="container col-sm-12 col-md-12 col-lg-4">
          <div className="row">
            <div className="col">
              <h2>codinglab</h2>
            </div>
            <div className="col mt-2">
              <ul className="list-inline">
                <li className="list-inline-item">Home</li>
                <li className="list-inline-item">About</li>
                <li className="list-inline-item">Skills</li>
                <li className="list-inline-item">Services</li>
              </ul>
            </div>
            <div className="col text-end a1">
              <div className="a open" id="modeIcon">
                <div className="icons">
                  <i className="bi bi-moon px-1 py-1 dark-mode" onClick={moon}></i>
                  <i className="bi bi-sun sunss" onClick={sun}></i>
                </div>
              </div>
            </div>
          </div>
          <div className={`color-box ${colorbox? "show" :""} `}>
            <h3 className="text-center text-dark">Color Switcher</h3>
            <div className="color-switchers" >
              <button className="btn bg-primary color" onClick={blueColor}></button>
              <button className="btn bg-success color" onClick={greenColor}></button>
              <button className="btn bg-warning color" onClick={yellowColor}></button>
              <button className="btn bg-danger color" onClick={redColor}></button>
            </div>
          </div>
        </div>
      </div>

      <div className={`home-content ${dark? "dark":""}  ${red ? "red":""} ${blue? "blue":""} ${green? "green":""} ${yellow? "yellow":""}`}>
        <div>
          <h2>Customize Your Website</h2>
          <h3>
            With <span className="fw-bold">Beautiful Colors</span>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cumque porro assumenda culpa consequatur
          </p>
          <div className="button">
            <a href="#">
              explore
              <i className="bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

