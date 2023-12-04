import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "./Search";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 20px;
    font-size: 15px;
  }
  .left-margin {
    margin-left: 20px;
  }
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 5px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderContainer>
        {/* <Header>
                <p>About</p>
                <p>Store</p>
            </Header> */}
        <Header>
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon className="left-margin" />
          <AccountCircleIcon className="left-margin" />
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"
          alt="Google logo"
        />
        <div>
          <Search />
        </div>
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
