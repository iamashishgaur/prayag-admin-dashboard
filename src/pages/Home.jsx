import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/commanstyle";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 17rem;
  align-items: center;
  flex-direction: column;
`;
const HomePageTitle = styled.div`
  display: flex;
  justify-content: center;
`;
const Buttoncontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;
`;


const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomePageTitle>
          <h2>Welcome TO Prayag Studio admin Dashboard</h2>
        </HomePageTitle>
        <Buttoncontainer>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
          <Button>
            <NavLink to="/signup">Signup</NavLink>
          </Button>
        </Buttoncontainer>
      </HomeContainer>
    </>
  );
};

export default Home;
