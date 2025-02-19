import { useState } from "react";

export function useLocalStorage (key,initial){
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initial
    })
    
    const setValue = value =>{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
    }

export function clearLocalStorage(key){
    localStorage.clear();
}