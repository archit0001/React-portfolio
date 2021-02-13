import React from 'react'
import './Education.css'
import Alert from 'react-bootstrap/Alert';

function Education() {
    return (
        <div className="education-container">
            <div className="data">
                <Alert variant="info">
                    <ul>
                        <li>
                            <b>Computer Programmer (May 2018-April 2020)</b><br></br>
                            Algonquin College of Applied Arts and Technology, Ottawa, ON<br></br>
                            GPA: 3.23 out of 4
                        </li>
                    </ul>
                </Alert>
            </div>
        </div>
    )
}

export default Education
