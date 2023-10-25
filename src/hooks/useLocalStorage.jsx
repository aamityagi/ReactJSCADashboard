import { useEffect } from 'react'
import { useState } from 'react'

const getLocalValue = (key, initValue) => {
    // SSR NEXTJS
    if (typeof window === 'undefined') return initValue;
    // if a value all ready store
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) return localValue;
    // Return result of a function
    if (initValue instanceof Function) return initValue();

    return initValue;
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        return getLocalValue(key, initValue)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);
    return [value, setValue]
}

export default useLocalStorage
