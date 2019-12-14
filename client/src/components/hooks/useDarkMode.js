import React, {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage("dark", initialValue);

    useEffect(() => {
        const card = document.querySelector(".cards")
        if(storedValue === true){
            card.classList.add("dark-mode")
        }
        else {
            card.classList.remove("dark-mode")
        }
    },[storedValue]);

    return [storedValue, setValue]
}

export default useDarkMode;