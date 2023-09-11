import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  gap: 7px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  & > label {
    color: #5f6368;
  }
  & > svg {
    position: absolute;
    top: 34.8%;
    right: 13%;
  }
`;
export const InputText = styled.input`
  padding: 15px 12px;
  /* flex: 1; */
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  border: none;
  box-shadow: 0px 0px 0px 2px #ddd;
  &:focus {
    box-shadow: 0px 0px 0px 2px #e85fab;
  }
`;

export const Passwordwrapper = styled.div`
  gap: 7px;
  display: flex;
  position: relative;
  flex-direction: column;
  & > label {
    color: #5f6368;
  }
  & > svg {
    position: absolute;
    top: 60%;
    right: 5%;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px;
  cursor: pointer;
  border-radius: 5px;
  background: #e444de;
  color: white;
  height: 35px;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: #e817e0;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;
  /* height: 360px; */
  padding: 30px;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 40px 17px rgba(0, 0, 0, 0.1),
    -12px 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 303px;
    padding: 10px 20px;
  }
`;
export const HeaderText = styled.div`
  font-size: 1.5rem;
  color: #5f6368;
`;

export const Rememberfield = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

export const NotAccount = styled.p`
  margin-top: -8px;
  text-align: center;
  font-size: 14px;
`;
export const Loginothers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  gap: 30px;
  & > svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const LoginText = styled.div`
  font-size: 0.8rem;
  letter-spacing: 2px;
`;

export const LockIcon = styled.span`
  right: 15px;
  top: 44px;
  color: #777;
  padding: 2px;
  cursor: pointer;
  position: absolute;

  & > svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: rgb(233 98 220);
    border-radius: 2px;
  }
`;
export const LoginButton = styled(Button)`

margin-top:0.5rem;
`;
