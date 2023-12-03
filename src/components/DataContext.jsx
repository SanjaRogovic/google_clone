import React, {createContext, useState} from "react"
import axios from "axios"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${
          import.meta.env.VITE_GOOGLE_API_KEY
        }&cx=${import.meta.env.VITE_CONTEXT_KEY}&q=${searchTerm}`
      );

      console.log(response.data);
      setData(response.data);
      
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    data,
    loading,
    searchTerm,
    setSearchTerm,
    getResults,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};


export default DataProvider