import React from "react";
import styled from "styled-components";
import LogAdminDetails from "./LogAdminDetails";
import { Headertitle } from "../style/commanstyle";
import { Sidenavbardata } from "./sidenavbar";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
const SidepanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navbarcontainer = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  & > span {
    display: flex;
    gap: 10px;
    cursor: pointer;
    p{
      color: gray;
    }
    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 10px;
      & > svg {
        font-size: 1.2rem;
      }
    }
  }
  a {
    text-decoration: none;
    color: gray;
  }
`;
const Adminnavcontainer = styled.div`
  height: calc(100%-18%);
`;
const Logoutcontainer = styled.div`
  margin-top: 1rem;
  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    p {
      color: gray;
    }
  }
`;
const Sidepanel = () => {
  return (
    <SidepanelContainer>
      <AdminContainer>
        <LogAdminDetails />
      </AdminContainer>
      <Adminnavcontainer>
        <Navbarcontainer>
          <span>
            <AiOutlineHome/><p>Dashboard</p>
          </span>
          {Sidenavbardata.map((item, index) => {
            return (
              <span>
                <li key={index}>
                  {item.icon} <a href={item.path}>{item.navname}</a>
                </li>
              </span>
            );
          })}
          <Logoutcontainer>
            <span>
              <AiOutlineLogout /> <p>Logout</p>
            </span>
          </Logoutcontainer>
        </Navbarcontainer>
      </Adminnavcontainer>
    </SidepanelContainer>
  );
};

export default Sidepanel;
