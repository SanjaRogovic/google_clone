import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import axios from 'axios';

const SearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 30px;
    padding: 10px 15px;
    width: 500px;
    margin: 0px auto;
    border-radius: 999px;
    input{
        flex: 1;
        padding: 8px 13px;
        font-size: medium;
        border: 0;
        outline: 0;
    }
    .searchicon{
        color: gray;
    }
`

const SearchButton = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    button{
        margin: 5px;
        background: #f8f8f8 !important;
        border: 1px solid white;
        text-transform: inherit;
        &:hover{
            margin: 5px;
            background: #f8f8f8 !important;
            color: #000;
            border: 1px solid #c6c6c6
        }
    }
`


const Search = ({hide}) => {

const [input, setInput] = useState("")
const [data, setData] = useState([]);

const navigate = useNavigate()

const handleChange = (e) => {
    setInput(e.target.value)
}


const fetchData = async () => {
    try {
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${
            import.meta.env.VITE_GOOGLE_API_KEY
          }&cx=${import.meta.env.VITE_CONTEXT_KEY}&q=${input}`)

          console.log("Search Context response", response.data)

          const data = response.data

        if (data === 0){
            return []
        } else {
            return setData(data)
        }
        
    } catch (error) {
        console.error('Fetching data failed', error.message);
        return []
    } 
}


const handleSubmit = async (e) => {
    e.preventDefault()
    await fetchData()
    navigate("/search"); 
}


  return (
    <form onSubmit={handleSubmit}>
      <SearchInput>
        <SearchIcon className="searchicon" />
        <input
          type="text"
          value={input}
          onChange={handleChange}
        />
        <MicIcon />
      </SearchInput>

     
      {!hide && (
        <SearchButton>
          <Button type="submit" variant="outlined">
            Google search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </SearchButton>
      )}

    </form>

   
  );
}

export default Search