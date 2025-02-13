import React from "react"
import useDarkMode from "./hooks/useDarkMode";
import "./Cards.css"

const Toggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'} 
        />
        </div>
    )
}

export default Toggle;