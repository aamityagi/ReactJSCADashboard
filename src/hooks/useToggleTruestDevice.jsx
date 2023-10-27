import useLocalStorage from "./useLocalStorage";

const useToggleTruestDevice = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const useToggleTruestDevice = (value) => {
        setValue(prev => {
            return typeof value === 'boolean' ? value : !prev;
        })
    }

    return [value, useToggleTruestDevice];
}

export default useToggleTruestDevice