import { withRouter } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import headshot from './headshot.jpg';
import linkedin from './Linkedin.png';
import email from './Email.png';

const Projects = () => {

    return (
        <div class="home-contents">
            <div class="row">
                <div class="column"> 
                   <div class="title-second">
                        Personal projects    
                    </div>
                    <br/>
                    <div class="para">
                        <div class="project">
                                <div class="project-title">
                                <b>Fishbowl Calorie Calculator</b>
                                <br/>
                                <br/>
                                </div>
                                <div class="explanation">
                                Have you ever wanted to know how many calories are in your Fishbowl order?
                                Like the rest of yuppie Sydney, I too am curious about this stuff. 
                                That's why I did all of the calculations for you (beware, some of your 'healthy' orders have >1,000cals).
                                </div>
                        </div>
                        <br/>
                        <div class="project">
                                <div class="project-title">
                                <b>Internship Probability Calculator</b>
                                <br/>
                                <br/>
                                </div>
                                <div class="explanation">
                                I did this for my USYD Advanced Studies degree. Surveyed 70 students on how many internships, societies and extracurriculars 
                                they were involved in. Made a logistic regression model to estimate the probability of you getting an internship at your penultimate year. 
                                </div>
                        </div>
                        <br/>
                        <div class="project">
                                <div class="project-title">
                                <b>Superannuation Analysis</b>
                                <br/>
                                <br/>
                                </div>
                                <div class="explanation">
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );        
  }

export default Projects;
