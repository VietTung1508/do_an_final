import React from 'react';
import  Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";
import './TogglePage.css'
const TogglePage = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem('selectedTheme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light')
    }
    const selectedTheme = localStorage.getItem('selectedTheme')
    if (selectedTheme === 'dark'){
        setDarkMode()
    }
    const toggleTheme = (e) => {
        if(e.target.checked)
            setDarkMode()
        else
            setLightMode()
    }
    return (
        <div className={'dark_mode'}>
            <input type="checkbox"
            id={'darkMode-toggle'}
            className={'dark_mode_input'}
            onChange={toggleTheme}
            defaultChecked={selectedTheme === 'dark'}
            />

            <label htmlFor={'darkMode-toggle'}
                   className={'dark_mode_label'}>
                <Sun/>
                <Moon/>
            </label>
        </div>
    );
};

export default TogglePage;
