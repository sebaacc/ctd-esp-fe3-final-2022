import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { themeSwitch } from "./themeSwitch";

export const initialState = { theme: 'light' }

export const ContextGlobal = createContext();

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}

export const ContextProvider = ({ children }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [state, dispatch] = useReducer(themeSwitch, initialState)
  const [favs, setFavs] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
  }, [state]);

  return (
    <ContextGlobal.Provider value={{ data, loading, setLoading, state, dispatch, favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );


};

export default ContextProvider;