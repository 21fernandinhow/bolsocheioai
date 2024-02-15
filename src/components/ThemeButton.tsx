"use client"

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton () {


    const [userTheme, setUserTheme] = useState('')

    const getStoredTheme = () => {
        if (typeof window !== "undefined") {
          const storedTheme = localStorage.getItem("theme");
          if (storedTheme !== null) {
            return storedTheme;
          }
        }
        return "light";
    }

    const handleTheme = (currentTheme: string) => {
        const userNewTheme:string = currentTheme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', userNewTheme)
        setUserTheme(userNewTheme)
    }

    const applyTheme = (theme : string) => {
        const isThemeDark = theme === 'dark'
        document.body.style.setProperty("--main-secondary-color", isThemeDark ? "#78dd9c" : "#1d7044");
        document.body.style.setProperty("--bg-main-color", isThemeDark ? "#181821" : "#F5F5F5");
        document.body.style.setProperty("--bg-secondary-color", isThemeDark ? "#11111C" : "#FFF");
        document.body.style.setProperty("--contrast-color", isThemeDark ? "#F5F5F5" : "#181821");
    }

    useEffect(()=>{
        const storedTheme = getStoredTheme()
        setUserTheme(storedTheme)
    }, [])

    useEffect(()=>{
        applyTheme(userTheme)
    },[userTheme])

    return(
        <span id="theme-btn" onClick={() => handleTheme(userTheme)}>
            {userTheme === 'dark'? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </span>
    )
}