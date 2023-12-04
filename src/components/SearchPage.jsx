import React, { useContext } from "react";
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
import { DataContext } from "../context/DataContext";


const SearchPageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  @media screen and (min-width: 600px) {
    padding: 30px;
  }

  img {
    height: 20px;
    margin-right: 5px;
    padding-top: 20px;
    padding-right: 5px;

    @media screen and (min-width: 600px) {
      height: 30px;
      margin-right: 5px;
    }
  }
`;


const SearchPageOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin-top: 20px; /* Reduced margin for small devices */

  @media screen and (min-width: 600px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
    display: none; /* Hide on small screens */
  }

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

  @media screen and (min-width: 600px) {
    margin-left: 10px;
  }
`;

const OptionsRight = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 600px) {
    margin-left: 10px;
  }
`;

const SearchPageOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    margin-right: 20px;
  }
`;


const SearchPageResults = styled.div`
  max-width: 100%;
  margin-top: 20px;
  margin-left: 10px; /* Adjusted margin for small devices */
  margin-bottom: 25px; /* Adjusted margin for small devices */

  @media screen and (min-width: 600px) {
    margin-left: 240px;
    margin-bottom: 35px;
  }

  .resultCount {
    color: #70757a;
    font-size: 16px; /* Adjusted font size for small devices */

    @media screen and (min-width: 600px) {
      font-size: 18px;
    }
  }

  .result {
    margin: 20px 0; /* Adjusted margin for small devices */

    @media screen and (min-width: 600px) {
      margin: 50px 0;
    }
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

const SearchPage = ({ hide }) => {
  const { data } = useContext(DataContext);

  console.log(data);

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

      {data && data.items && data.items.length ? (
        <>
          <SearchPageResults className="resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime}) for{" "}
            {data?.queries?.request && data.queries.request[0]?.searchTerms}
          </SearchPageResults>

          {data.items.map((item, index) => (
            <SearchPageResults key={index}>
              <div className="result">
                <SearchPageLink href={item?.link} target="_blank">
                  <img
                    src={
                      item?.pagemap?.cse_image && item.pagemap.cse_image[0]?.src
                    }
                    alt={item?.title}
                  />
                  {item?.displayLink}
                </SearchPageLink>
                <SearchPageResultTitle href={item?.link}>
                  <h2>{item?.title}</h2>
                </SearchPageResultTitle>
                <SearchPageResultDesc>{item?.snippet}</SearchPageResultDesc>
              </div>
            </SearchPageResults>
          ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
