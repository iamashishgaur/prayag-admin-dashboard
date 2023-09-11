import React from "react";
import axios from "axios";
import {
  InputText,
  HeaderText,
  LoginButton,
  ContentWrapper,
  LoginContainer,
  NotAccount,
} from "../style/style";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const baseURL = "http://localhost:3001/";
const MsgDiv = styled.div`
  color: #e91e63;
  font-size: 12px;
  margin: 5px 24px 0px;
  ${(props) =>
    props.exists &&
    css`
      color: #2ca231;
    `}
`;
const Login = () => {
  const nav = useNavigate();
  const [message, setMessage] = React.useState("");
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const submitRef = React.useRef();
  
  const authenticateUser = async function () {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;

    const resp = await axios.post(
      baseURL + "authenticateUser",
      { userName, password },
      axiosConfig
    );

    if (resp.data && resp.data.isAuthenticated) {
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("isAdmin", resp.data.isAdmin);
      setMessage("You have logged in ");
      if (resp.data.isAdmin) nav("/admindashboard");
      else nav("/home");
    } else {
      setMessage(resp.data.message);
      sessionStorage.setItem("isAdmin", false);
    }
  };
  const checkUserExists = async function () {
    const userName = usernameRef.current.value;

    if (userName.trim() === "" || userName.trim().length < 4) return;

    const resp = await axios.post(
      baseURL + "checkUserExists",
      { userName },
      axiosConfig
    );

    // if (resp.data && !resp.data.isExistingUser) {
    //   setMessage("User doesn't exist, please create an account");
    // }
  };
  const onEnter = function (evt) {
    // if the key pressed is an Enter key then
    if (evt.keyCode === 13) {
      submitRef.current.click();
    }
  };
  const sessionUserName = sessionStorage.getItem("userName") || "";
  return (
    <LoginContainer>
      <ContentWrapper>
        <HeaderText>Login</HeaderText>
        {message ? (
          <MsgDiv exists={message === "User Exists"}>{message}</MsgDiv>
        ) : null}
        <InputText
          ref={usernameRef}
          type="text"
          placeholder="username/email"
          onBlur={checkUserExists}
          defaultValue={sessionUserName}
          autoFocus={sessionUserName ? false : true}
        />
        <InputText
          ref={passwordRef}
          type="password"
          placeholder="password"
          autoFocus={sessionUserName ? true : false}
          onKeyUp={onEnter}
        />
        <LoginButton ref={submitRef} onClick={authenticateUser}>
          Login
        </LoginButton>
        <NotAccount>
          <p>
            Don't have any account ? <NavLink to="/signup">Signup</NavLink>
          </p>
        </NotAccount>
      </ContentWrapper>
    </LoginContainer>
  );
};
export default Login;
