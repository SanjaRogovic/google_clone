import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 15px;
  width: 500px;
  margin: 0px auto;
  border-radius: 999px;
  input {
    flex: 1;
    padding: 8px 13px;
    font-size: medium;
    border: 0;
    outline: 0;
  }
  .searchicon {
    color: gray;
  }
`;

const SearchButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  button {
    margin: 5px;
    background: #f8f8f8 !important;
    border: 1px solid white;
    text-transform: inherit;
    &:hover {
      margin: 5px;
      background: #f8f8f8 !important;
      color: #000;
      border: 1px solid #c6c6c6;
    }
  }
`;

const Search = ({ hide }) => {
  const { searchTerm, setSearchTerm, getResults } = useContext(DataContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getResults();
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput>
        <SearchIcon className="searchicon" />
        <input type="text" value={searchTerm} onChange={handleChange} />
        <MicIcon />
      </SearchInput>

      {!hide && (
        <SearchButton>
          <Button type="submit" variant="outlined">
            Google search
          </Button>
          <a href="https://doodles.google/">
            <Button variant="outlined">I am feeling lucky</Button>
          </a>
        </SearchButton>
      )}
    </form>
  );
};

export default Search;
