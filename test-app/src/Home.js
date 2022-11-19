import { withRouter } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import headshot from './headshot.jpg';
import linkedin from './Linkedin.png';
import email from './Email.png';

const Home = () => {

    function sayHello() {
        alert('Hello!');
        }    

    function getMousePos(evt) {
        var doc = document.documentElement || document.body;
        var pos = {
            x: evt ? evt.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
            y: evt ? evt.pageY : window.event.clientY + doc.scrollTop - doc.clientTop
        };
        return pos;
    }
    
    document.onmousemove = moveMouse;
    
    function moveMouse(evt) {
        var pos = getMousePos(evt),
            followMouse = document.getElementById("_followMouse");
        followMouse.style.backgroundPosition = pos.x + "px " + pos.y + "px";
    }

    return (
    <div className="home-contents">
        <div className="row">
            <div className="column home-left">
                <div id="_followMouse" className="ryan">
                    <b> 
                        Ryan Dharma
                    </b>
                </div> 
                
                <br/>
                Hello 👋 – welcome to my website! Get in touch with me below: 
                <br/>
                <br/>
                <img src={email} alt="email" width="70"/> &nbsp;
                <img src={linkedin} alt="linkedin" width="50"/> &nbsp;
                <br/>
                <br/> 
            </div>
            <div className="column home-right">
                <br/>
                <img src={headshot} alt="headshot" className="ryan-headshot" width="200"/>
            </div>
            <div className="column">
                <br/>
                <div className="title-second">
                    <b>
                        About me
                        
                    </b>
                </div>
                <div className="para">
                    <br/>
                    University of Sydney Commerce (Finance & Statistics). Graduating at Bank of America
                    in Investment Banking. Two years' experience at Sun Cable (Finance & Strategy), Allegro Funds (Private Equity) and Brinson & Associates. 

                    <br/>
                    <br/>
                    I'm interested in anything renewables, finance, data and tech related. Currently learning how to code better – everything is WIP.  
                    <br/>
                    <br/>
                    </div>                 
            </div>

            <div className="column">
                <br/>
                <div className="title-second">
                    <b>
                        Highlights                        
                    </b>
                </div>
                <div className="para">
                    <br/>
                    <b>2019:</b> Joined the USYD Dog Society as a founding executive. 
                    <br/>
                    <br/>
                    <b>2020:</b> Exchange at the University of Pennsylvania (Wharton School).
                    <br/>
                    <br/>
                    <b>2020:</b> Began at Brinson & Associates. Built a big financial model for a solar farm.
                    <br/>
                    <br/>
                    <b>2021:</b> Began at Allegro Funds and did my Summer Analyst at Bank of America.  
                    <br/>
                    <br/>
                    <b>2022:</b> Got to work on the largest solar farm in the world at Sun Cable.
                    <br/>
                    <br/>
                    <b>2022:</b> Travelled a lot! Went to New York, Vietnam, Singapore and Indonesia. 
                    <br/>
                    <br/>
                    <b>2023 and beyond:</b> (Incoming) Graduate at Bank of America.
                    <br/>
                </div>
            </div>        

            <div className="column">
                <br/>
                <div className="title-second">
                    <b>
                        Personal Projects                        
                    </b>
                </div>
                <div className="para">
                    <br/>
                    Work in progress. You'll see a few Excel projects, articles, programs and thoughts below.
                    <br/>
                    <br/>
                    Click <Link to="/projects">here</Link> for more detail.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>    
        </div>
      </div>

    );        
  }

export default Home;
