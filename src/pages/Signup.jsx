import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  LoginContainer,
  InputText,
  Button,
  ContentWrapper,
  HeaderText,
  NotAccount,
  Passwordwrapper,
  InputWrapper,
  LockIcon,
} from "../style/style";
import axios from "axios";

const PHONE_REGEX = new RegExp(
  /"^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"/gim
);
const axiosconfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const SignUp = () => {
  const nav = useNavigate();
  const usernameRef = useRef();
  const phonenumberRef = useRef();
  const passwordRef = useRef();
  const [type, setType] = React.useState("password");

  const onlyAlphabets = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[a-z A-Z\b]+$/);

    if (!regex.test(char)) evt.preventDefault();
  };

  // Password Toggel start
  const toggleVisibilityOfPassword = function () {
    if (type === "text") setType("password");
    else setType("text");
  };

  // Phone Number with Flag
  const {
    handleSubmit,
    formState: { error },
    control,
  } = useForm();
  const onSubmit = (data) => {
    console.log({ data });
  };

  

  const onRegister = async function () {
    const resp = await axios.post(
      "http://localhost:3001/register",
      {
        userName: usernameRef.current.value,
        password: passwordRef.current.value,
      },
      axiosconfig
    );
    if (resp.data && resp.data.isRegistred) {
      alert("Register Successfully");
      nav("/login");
    }
  };
  return (
    <LoginContainer>
      <ContentWrapper>
        <HeaderText>Register</HeaderText>
        <InputWrapper>
          <label htmlFor="">UserName :</label>
          <InputText
            ref={usernameRef}
            type="text"
            placeholder="username"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">Full Name :</label>
          <InputText
            type="text"
            placeholder="Full name"
            required
            onKeyDown={onlyAlphabets}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">Phone Number:</label>
          <InputText ref={phonenumberRef} type="number" placeholder="phone number" />
        </InputWrapper>

        <Passwordwrapper>
          <label htmlFor="">Password :</label>
          <InputText ref={passwordRef} type={type} placeholder="password" />
          <LockIcon onClick={toggleVisibilityOfPassword}>
            {type === "text" ? <BiShowAlt /> : <BiHide />}
          </LockIcon>
        </Passwordwrapper>
        <Button onClick={onRegister} style={{ marginTop: "0.8rem" }}>
          Register
        </Button>
        <NotAccount>
          <p>
            I have alredy a Account |{" "}
            <span
              style={{ cursor: "pointer", color: "#0B81D5" }}
              onClick={() => {
                nav("/login");
              }}
            >
              Login
            </span>
          </p>
        </NotAccount>
      </ContentWrapper>
    </LoginContainer>
  );
};

export default SignUp;
