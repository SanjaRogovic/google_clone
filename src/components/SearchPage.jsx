import React, {useState, useContext} from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "styled-components";
import Loader from "./Loader";
import { DataContext } from "./DataContext";

const SearchPageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  img {
    height: 50px;
    margin-right: 50px;
  }
`;

const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: gray;
    margin-left: 5px;
  }
`;


const OptionsLeft = styled.div`
  margin-left: 0px;
  display: flex;
  align-items: center;
`;

const OptionsRight = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;
`;

const SearchPageOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const SearchPageResults = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
  .resultCount {
    color: #70757a;
    font-size: 14px;
  }
  .result {
    margin: 40px 0px;
  }
`;

const SearchPageLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 3px;
  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    margin-right: 10px;
  }
`;

const SearchPageResultTitle = styled.a`
  text-decoration: none;
  h2 {
    font-weight: 500;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const SearchPageResultDesc = styled.p`
  margin-top: 10px;
`;

const SearchPage = () => {

const { data } = useContext(DataContext);

console.log(data)

  return (
    <div>
      <SearchPageHeader>
        <Link to="/search">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"
            alt="google"
          />
        </Link>
        <div>
          <Search hide />
          <SearchPageOptions>
            <OptionsLeft>
              <SearchPageOption>
                <SearchIcon />
                <Link to="/">All</Link>
              </SearchPageOption>
              <SearchPageOption>
                <DescriptionIcon />
                <Link to="/">News</Link>
              </SearchPageOption>
              <SearchPageOption>
                <ImageIcon />
                <Link to="/">Images</Link>
              </SearchPageOption>
              <SearchPageOption>
                <LocalOfferIcon />
                <Link to="/">Shopping</Link>
              </SearchPageOption>
              <SearchPageOption>
                <RoomIcon />
                <Link to="/">Maps</Link>
              </SearchPageOption>
              <SearchPageOption>
                <MoreVertIcon />
                <Link to="/">More</Link>
              </SearchPageOption>
            </OptionsLeft>
            <OptionsRight>
              <SearchPageOption>
                <Link to="/">Settings</Link>
              </SearchPageOption>
              <SearchPageOption>
                <Link to="/">Tools</Link>
              </SearchPageOption>
            </OptionsRight>
          </SearchPageOptions>
        </div>
      </SearchPageHeader>

      {data ? (
        <SearchPageResults>
          <p className="resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} ) for {data}
          </p>

          {data?.items?.map((item) => (
            <div className="result">
              <SearchPageLink href={item.link}>

                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.cse_image[0]?.src} alt="search" />
                )}
                
                {item.displayLink}

              </SearchPageLink>
              <SearchPageResultTitle href={item.link}>
                <h2>{item.htmlTitle}</h2>
              </SearchPageResultTitle>
              <SearchPageResultDesc>{item.htmlSnippet}</SearchPageResultDesc>
            </div>
          ))}
        </SearchPageResults>
      ) : <Loader />}

    {/* {!data ? <Loader /> : data} */}

    </div>
  );
};

export default SearchPage;
