import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]); // Default is empty array
  const [error, setError] = useState("");

  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(Array.isArray(response.data) ? response.data : []);
      console.log("Fetched Incomes:", response.data);
    } catch (err) {
      console.error("Error fetching incomes:", err);
      setError("Failed to load incomes.");
    }
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes()
  }

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => (totalIncome += income.amount));
  
   return totalIncome;
  }

  console.log('total:',totalIncome);

  useEffect(() => {
    getIncomes(); // Called inside useEffect to prevent infinite loops
  }, []);

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      setIncomes((prevIncomes) => [...prevIncomes, response.data]);
      console.log("Added Income:", response.data);
    } catch (err) {
      console.error("Error in addIncome:", err);
      setError("Failed to add income.");
    }
  };

  return (
    <GlobalContext.Provider value={{ addIncome, getIncomes, incomes, deleteIncome }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to use global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
