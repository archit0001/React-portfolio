import React from 'react'
import  Alert from 'react-bootstrap/Alert';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me-container">
            <Alert variant="info">
            <div className="data">
            <ul>
                <li>
                    Excellent written and verbal communication skills.
                </li>
                <li>
                    Experience with dynamic, fast-paced technical environments
                </li>
                <li>
                    Demonstrates a sound decision-making ability, reliability, responsibility, professionalism, and works efficiently as an individual and as a team member to meet assigned goals. 
                </li>
                <li>
                    Always Looking for new technologies to learn and implement in development.
                </li>
            </ul>
            </div>
            </Alert>
        </div>
    )
}

export default AboutMe
