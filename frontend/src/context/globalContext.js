import React, { useState } from "react";
import axios from 'axios'
import { useContext } from "react";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const[incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([])

    const addIncome = async (income) => {
        try {
            console.log(`Sending request to: ${BASE_URL}add-income`); // Debugging
    
            const response = await axios.post(`${BASE_URL}add-income`, income);
            
            console.log("API Response:", response.data); // Log successful response
    
            if (response?.data) {
                setIncomes([...incomes, response.data]); // Store the new income in state
            } else {
                throw new Error("Invalid API response: No data received");
            }
        } catch (err) {
            console.error("Error in addIncome:", err);
            console.error("Full error response:", err.response);
    
            setError(err.response?.data?.error || "An error occurred");
        }
    };
    



    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => { return useContext(GlobalContext)}
