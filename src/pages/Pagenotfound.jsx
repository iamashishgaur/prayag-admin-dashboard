import React from "react";
import { Button } from "../style/commanstyle";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Pagenofound from "../assets/img404.webp";

const Pagenotfoundcontainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Image404 = styled.div``;
const Pagenotfound = () => {
  return (
    <Pagenotfoundcontainer>
      <Image404>
        <img src={Pagenofound} alt="404" />
      </Image404>
      <Button>
        <NavLink to="/">Go to home page</NavLink>
      </Button>
    </Pagenotfoundcontainer>
  );
};

export default Pagenotfound;
