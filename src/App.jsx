import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function App() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
        color: "white", 
        backgroundColor: "transparent",
        backgroundImage: "" 
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.backgroundColor = "transparent"; 
        customStyle.backgroundImage = 'url("img/morning.jpg")'; 
    } else if (currentTime < 18) {
        greeting = "Good Noon";
        customStyle.backgroundColor = "transparent"; 
        customStyle.backgroundImage = "('img/noon.jpg')"; 
    } else {
        greeting = "Good Night";
        customStyle.backgroundColor = "transparent"; 
        customStyle.backgroundImage = "('img/night.jpg')"; 
    }

    const rootElement = document.getElementById("root");
    document.body.style.backgroundColor = customStyle.backgroundColor; 
    document.body.style.backgroundImage = customStyle.backgroundImage; 

    ReactDOM.render (
        <h1 className="heading" style={customStyle}>{greeting}</h1>,
        rootElement
    );
}

export default App;
