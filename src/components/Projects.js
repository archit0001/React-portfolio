import React from 'react'
import  Alert from 'react-bootstrap/Alert';
import './Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <Alert variant="info">
            <div className="data">
            
            <b>React Portfolio:</b>
            <ul>
                <li>A web project hosted on Google Firebase cloud, component-based and fully dynamic portfolio using bootstrap in React.js.</li>
                <li><b>Github:</b><a href="https://github.com/archit0001/React-portfolio">https://github.com/archit0001/React-portfolio</a></li>
                <li><b>Hosting URL:</b><a href="https://archit-anghan.web.app">https://archit-anghan.web.app</a></li>
                <li>[Node.js, React, HTML, CSS, Firebase]</li>
            </ul>

            <b>Combine Android Application:</b>
            <ul>
                <li>Created 4 different apps based on real-time XML and JSON data. Using basic and advanced topics of android, fetch the data from the server asynchronously and manage with the help of four different APIs.</li>
                <li><b>Github:</b><a href="https://github.com/archit0001/Combine-App">https://github.com/archit0001/Combine-App</a></li>
                <li>[Android, Rest API, Java, XML, SQLite]</li>
            </ul>

            <b>Dictionary Android Application:</b>
            <ul>
                <li>A dictionary application to find word defination with add to favourite and delete functionality using database.</li>
                <li><b>Github:</b><a href="https://github.com/archit0001/Merriam-Webster-Dictionary-Android-App">https://github.com/archit0001/Merriam-Webster-Dictionary-Android-App</a></li>
                <li>[Android, Rest API, Java, XML, SQLite]</li>
            </ul>

            <b>Nodejs Project:</b>
            <ul>
                <li>Using file system module(fs), created data handling functions. Read data synchronously with the help of the advanced topic of inheritance and npm package manager that allows playing with data.</li>
                <li><b>Github:</b><a href=" https://github.com/archit0001/Nodejs-Project"> https://github.com/archit0001/Nodejs-Project</a></li>
                <li>[Node.js]</li>
            </ul>

            <b>Java Enterprise application:</b>
            <ul>
                <li>Developed enterprise application run on Payara server with MySQL database using JavaEE concepts such as JSF framework, JSP, JPA, persistence framework Hibernate, EJB.</li>
                <li>[JavaSE, JavaEE, JSF, Hibernate, MySQL]</li>
            </ul>
            </div>
            </Alert>
        </div>
    )
}

export default Projects
