import React, { useState, useEffect, createContext } from 'react';


 export const DataContext = createContext();

 export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      const jsonData = await response.json();
      setData([jsonData.user]);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <DataContext.Provider value={{data}}>
      {children}
    </DataContext.Provider>
  );
};
