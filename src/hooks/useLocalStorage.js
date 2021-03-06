import { useEffect, useState } from 'react'

// this helps differentiate apps that are all running on localhost because local storage will conflict
const PREFIX = 'whatsapp-clone-'

// this function works like a normal useState, but persists everything into local storage
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    // get the item that was stored
    const jsonValue = localStorage.getItem(prefixedKey)
    // if there is a value, return it. Needs to be not null in case 0 is stored
    if (jsonValue != null) return JSON.parse(jsonValue)
    // if the initial value is a function, call the function
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      // if it's not a function, just return the value
      return initialValue
    }
  })

  // any time the key or value change, we want to set the local storage with the new value
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
