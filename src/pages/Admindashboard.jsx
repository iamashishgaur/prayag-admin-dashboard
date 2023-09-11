import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import Sidepanel from "../component/Sidepanel";
import Pnaelboxdetails from "../component/Panelboxdetails";
import { Button } from "../style/commanstyle";
// import { Headertitle } from "../style/commanstyle";
const Admindashboardcontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 10px;
  /* justify-content: center; */
  /* align-items: center; */
  border: 1px solid red;
  padding: 10px;
`;
const SidePannelContainer = styled.div`
  width: 18%;
  /* height: 100vh; */
  border: 1px solid orange;
`;
const AdminPlayGroundContainer = styled.div`
  width: calc(100% - 18%);
  /* height: 100vh; */
  border: 1px solid orange;
`;
const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminBoxContainer = styled.div`
  width: 100%;
  /* margin-top: 1rem; */
  height: 190px;
  
  border: 1px solid black;
`;
const RecentorderTablecontainer = styled.div`
  /* margin-top: 1.5rem; */
`;

const Tabledatacontainer = styled.div`
  /* margin-top: 1.5rem; */
  border: 1px solid skyblue;
  width: 100%;
  /* height: calc(100vh - 370px); */
`;
const Headertitle = styled.div`

font-size:1.5rem;
color: gray;
`;
const Middledatacontainer = styled.div`
display:flex;
margin: 0.8rem 0;
/* padding:0 2rem; */
justify-content: space-between;
align-items: center;
`;
const Buttoncontainer = styled.div``;
const Admindashboard = () => {
  return (
    <>
      <Admindashboardcontainer>
        <SidePannelContainer>
          <Sidepanel />
        </SidePannelContainer>
        <AdminPlayGroundContainer>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
          <AdminBoxContainer>
            <Pnaelboxdetails />
          </AdminBoxContainer>
          <RecentorderTablecontainer>
            <Middledatacontainer>
            <Headertitle>Recent Order</Headertitle>
            <Buttoncontainer>
              <Button>Export CSV</Button>
            </Buttoncontainer>
            </Middledatacontainer>
            <Tabledatacontainer></Tabledatacontainer>
          </RecentorderTablecontainer>
        </AdminPlayGroundContainer>
      </Admindashboardcontainer>
    </>
  );
};

export default Admindashboard;
