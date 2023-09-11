import React from "react";
import styled from "styled-components";
import {
  AiFillBell,
  AiOutlineSearch,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Headertitle } from "../style/commanstyle";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
const NavbarLeft = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    margin-left: 1.5rem;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
const Navbarright = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchbarContainer = styled.div`
  margin-left: 10rem;
  width: 40%;
  /* height: 30px; */

  position: relative;
  & > svg {
    position: absolute;
    top: 24%;
    left: 92%;
    font-size: 20px;
    cursor: pointer;
  }
  input {
    width: 100%;
    border-radius: 6px;
    padding: 10px 12px;
    /* border: none; */
    outline: none;
    font-size: 1rem;
    color: gray;
  }
`;
const HumburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  & > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <AiOutlineAlignLeft />
          <Headertitle>Prayag studio Dashboard</Headertitle>
        </NavbarLeft>
        <Navbarright>
          <SearchbarContainer>
            <input type="text" name="text" placeholder="search..." />
            <AiOutlineSearch />
          </SearchbarContainer>
          <HumburgerContainer>
            <CiDark />
            <MdOutlineLightMode />
            <AiFillBell />
            <CgProfile />
          </HumburgerContainer>
        </Navbarright>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
